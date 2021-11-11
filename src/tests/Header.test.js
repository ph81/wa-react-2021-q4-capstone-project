import React from "react";
import { render, screen } from "@testing-library/react";
import Routes from "../utils/routes";
import { ProductsProvider } from "../context/ProductContext";
import { FilterProvider } from "../context/FilterContext";
import { CartProvider } from "../context/CartContext";

const renderHeader = () => {
  render(
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  );
};

test("Renders Ecommerce store name in the Header component", () => {
  renderHeader();
  const navElement = screen.getByText(/Nakama/i);
  expect(navElement).toBeInTheDocument();
});
