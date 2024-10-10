import React, { createContext, useState } from 'react';
import ShopPage from './pages/ShopPage';
import { Toaster } from 'react-hot-toast';
import {  CartProvider } from './Provider/cartProvider';



const App = () => {

  
    return (
      <CartProvider>
        <ShopPage/>
        <Toaster position='top-right'/>
      </CartProvider>
    );
}

export default App;
