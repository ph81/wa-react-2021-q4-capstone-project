import React from "react";
import ReactDOM from "react-dom";
//import { useRoutes } from 'hookrouter';
import Routes from "./utils/routes";
import { ProductsProvider } from "./context/ProductContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {
  return (
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'>
    <UserProvider>
      <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </FilterProvider>
      </ProductsProvider>
    </UserProvider>
    </Auth0Provider>
    
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
