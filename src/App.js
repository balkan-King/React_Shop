import React from 'react';
import './App.css';
import './style.css';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import WebShop from './pages/WebShop';
import Home from './pages/Home';
import WeatherApi from './pages/WeatherApi'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <PrivateRoute exact path={"/shop"} component={WebShop} />
          <PrivateRoute exact path={"/weather"} component={WeatherApi} />
          <Route exact path={"/logIn"} component={LogIn} />
          <Route exact path={"/signUp"} component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
