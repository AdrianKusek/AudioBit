// src/app/product/[slug]/page.js
import React from 'react';
import { client } from "@/app/lib/client";
import { Product } from '../../components';
import ProductDetail from './ProductDetail'; // Import the Client Component

async function getProductData(slug) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  
  return { product, products };
}

// Server Component for fetching data
export default async function ProductPage({ params }) {
  const { slug } = params;  // Get the dynamic slug from the URL
  const { product, products } = await getProductData(slug);  // Fetch product data dynamically

  return (
    <div>
      <ProductDetail product={product} products={products} /> {/* Pass data to the Client Component */}
    </div>
  );
}
