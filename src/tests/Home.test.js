import React from "react";
import { render, screen } from "@testing-library/react";
import Routes from "../utils/routes";
import { ProductsProvider } from "../context/ProductContext";
import { FilterProvider } from "../context/FilterContext";
import { CartProvider } from "../context/CartContext";

const renderHome = () => {
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

test("Renders categories at Home page", () => {
  renderHome();
  const catElement = screen.getByText(/Departments/i);
  expect(catElement).toBeInTheDocument();
});

test("Renders featured products at Home page", () => {
   renderHome();
   const ftProduct = screen.getByText(/New collection/i);
   expect(ftProduct).toBeInTheDocument();
})
