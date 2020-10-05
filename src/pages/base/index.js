import React from 'react';
import './index.scss';

import {
  Route,
  Router,
  Switch,
  useLocation
} from "react-router-dom";

import Topbar from '../../components/topbar/index';
import Work from '../../pages/work/index';
import About from '../../pages/about/index';
import Error from '../../pages/error/index';

const Page = () => { 
    
  let location = useLocation();
  let currentPage;

  switch(location.pathname) {
    case '/work':
      currentPage = <Work/>;
    break;
    case '/about':
      currentPage = <About/>;
    break;
    default:
      currentPage = 
        <Error/>;
    break;
  }

  return currentPage;

}

function App() {
  return (
    <div className="body-container">
      <Topbar/>
      <div className="content-container">
      <Switch>
        <Route>
          {Page()}
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
