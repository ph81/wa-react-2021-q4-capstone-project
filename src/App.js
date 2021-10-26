import React from 'react';
import ReactDOM from 'react-dom';
//import { useRoutes } from 'hookrouter';
import Routes from './helpers/Routes';

const App = () => {
  return (
    <Routes />
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;