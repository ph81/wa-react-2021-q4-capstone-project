import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';

const renderHeader = () => {
  render(
    <CartProvider>
      <BrowserRouter>
      <Header />
     </BrowserRouter>
    </CartProvider>

  );
};

test("Renders Ecommerce store name in the Header component", () => {
  renderHeader();
  const navElement = screen.getByText(/Nakama/i);
  expect(navElement).toBeInTheDocument();
});
