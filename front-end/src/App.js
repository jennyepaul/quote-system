import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.js';
import Page1 from './Page1.js'
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/Page1" component={Page1} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
