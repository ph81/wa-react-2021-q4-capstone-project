import React from 'react';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';

const routes = {
    "/": () => <Home />,
    "/allproducts": () => <AllProducts />
  };
  
  export default routes;