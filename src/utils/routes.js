import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import ProductsPage from '../pages/ProductsPage';
import SingleProduct from '../pages/SingleProduct';
import Search from '../pages/Search';
import Testing from '../pages/Testing'
import ByCategory from '../pages/ByCategory';

const Routes= () => {

  return(
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/home" component={Home}/> 
            <Route path="/search" component={Search}/> 
            <Route exact path="/allproducts" component={AllProducts}/> 
            <Route exact path="/products" component={ProductsPage}/> 
            <Route exact path='/products/:id' component={SingleProduct} />
            <Route exact path='/category/:slug' component={ByCategory} />
            <Route exact path='/testing/:id' component={Testing} />
          </Switch>
        </BrowserRouter>

      </>

  );

}


export default Routes;