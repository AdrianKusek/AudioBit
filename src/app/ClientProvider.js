"use client"; // This makes ClientProvider a Client Component

import React from "react";
import { StateContext } from './context/StateContext'; // Import your context provider
import { Toaster } from 'react-hot-toast'; // Import the Toaster

// Wrap all client-side logic here
const ClientProvider = ({ children }) => {
  return (
    <StateContext>
      {children}
      <Toaster /> {/* This enables toast notifications */}
    </StateContext>
  );
};

export default ClientProvider;
