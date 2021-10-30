import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import ProductsPage from '../pages/ProductsPage';
import SingleProduct from '../pages/SingleProduct';

const Routes= () => {

  return(
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/home" component={Home}/> 
            <Route exact path="/allproducts" component={AllProducts}/> 
            <Route exact path="/products" component={ProductsPage}/> 
            <Route exact path='/products/:id' children={SingleProduct} />
          </Switch>
        </BrowserRouter>

      </>

  );

}


export default Routes;