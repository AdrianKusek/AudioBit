"use client"; // This directive makes the component a Client Component

import React from 'react';
import Link from 'next/link';

const CancelClient = () => {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <h2>Your order has been canceled</h2>
        <p className="description">
          If you have any questions, please email{' '} 
          <a className="email" href="mailto:orders@example.com">
            orders@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CancelClient;