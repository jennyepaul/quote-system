import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

function App() { //creates the routes to every page
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact/>  {/*route to login page*/}
          <Route path="/Page1" component={Page1} exact/> {/*route to page1*/}
          <Route path="/Page2" component={Page2} exact/> {/*route to page2*/}
          <Route path="/Page3" component={Page3} exact/> {/*route to page3*/}
	        <Route path="/Page4" component={Page4} exact/> {/*route to page4*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
