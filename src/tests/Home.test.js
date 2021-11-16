import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {Home} from '../pages/Home'

const renderHome = () => {
  render(
  
        <BrowserRouter>
          <Home />
          </BrowserRouter>
 
  );
};

test("Renders categories at Home page", () => {
  renderHome();
  const catElement = screen.getByText(/Furniture/i);
  expect(catElement).toBeInTheDocument();
});

test("Renders featured products at Home page", () => {
   renderHome();
   const ftProduct = screen.getByText(/Greyton/i);
   expect(ftProduct).toBeInTheDocument();
})
