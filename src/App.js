import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'hookrouter';
import routes from './helpers/Navigation'

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;