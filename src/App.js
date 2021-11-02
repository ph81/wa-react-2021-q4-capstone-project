import React from 'react';
import ReactDOM from 'react-dom';
//import { useRoutes } from 'hookrouter';
import Routes from './utils/routes';
import { ProductsProvider } from './context/ProductContext';
import { FilterProvider } from './context/FilterContext';


const App = () => {
  return (
        <ProductsProvider>
          <FilterProvider>
            <Routes />
          </FilterProvider>
        </ProductsProvider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;