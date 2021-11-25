import React from "react";
import ReactDOM from "react-dom";
//import { useRoutes } from 'hookrouter';
import Routes from "./utils/routes";
import { ProductsProvider } from "./context/ProductContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
