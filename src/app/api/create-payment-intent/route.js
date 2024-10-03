import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { cartItems } = await request.json();
    console.log('Received cart items:', cartItems);

    const origin = request.headers.get('origin');
    if (!origin) {
      throw new Error('Origin header is missing');
    }

    const successUrl = `${origin}/success`;
    const cancelUrl = `${origin}/canceled`;

    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1Q5lwKP7M0gTrKyzhHVMXA2Q' },
      ],
      line_items: cartItems.map((item) => {
        const img = item.image[0].asset._ref;
        const newImage = img.replace('image-', 'https://cdn.sanity.io/images/dks90v2k/production/').replace('-webp', '.webp');

        return {
          price_data: { 
            currency: 'usd',
            product_data: { 
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: successUrl,
      cancel_url: cancelUrl,
    };

    console.log('Creating session with params:', params);

    // Create Checkout Session from body params.
    const session = await stripe.checkout.sessions.create(params);

    console.log('Session created:', session);

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error('Error creating session:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}