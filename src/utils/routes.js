import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import ProductsPage from '../pages/ProductsPage';
import SingleProduct from '../pages/SingleProduct';
import Search from '../pages/Search';
import Testing from '../pages/Testing'
import ByCategory from '../pages/ByCategory';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const Routes= () => {

  return(
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/home" component={Home}/> 
            <Route path="/search" component={Search}/>
            <Route path="/cart" component={Cart}/> 
            <Route path="/checkout" component={Checkout}/>
            <Route exact path="/allproducts" component={AllProducts}/> 
            <Route exact path="/products" component={ProductsPage}/> 
            <Route exact path='/products/:id' component={SingleProduct} />
            <Route exact path='/category/:slug' component={ByCategory} />
            <Route exact path='/testing/:id' component={Testing} />
            <Route path="*" component={Error} />
          </Switch>
        </BrowserRouter>

      </>

  );

}


export default Routes;