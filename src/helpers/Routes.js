import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';

const Routes = () =>{

  return(
      <>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}/> 
                  <Route exact path="/allproducts" component={AllProducts}/> 
              </Switch>
          </BrowserRouter>
      </>
  );
}


export default Routes;