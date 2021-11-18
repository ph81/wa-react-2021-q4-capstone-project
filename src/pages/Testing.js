import React from 'react';
import Home from '../pages/Home';
import { ProductsProvider } from "../context/ProductContext";
import { FilterProvider } from "../context/FilterContext";
import { CartProvider } from "../context/CartContext";

const Testing = () => {
   return (
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <Home />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    );
}

export default Testing;