import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductsProvider } from "../context/ProductContext";
import { FilterProvider } from "../context/FilterContext";
import { CartProvider } from "../context/CartContext";
import Home from '../pages/Home'

const renderHome = () => {
  render(
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
        <Router>
          <Home />
        </Router>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  );
};

test("Renders Categories",   async () => {
  renderHome();
  const navElement = screen.getByText(/collection/i);
  expect(navElement).toBeInTheDocument();
});
