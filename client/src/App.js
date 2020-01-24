import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "../src/components/auth/Signup";
import Login from "../src/components/auth/Login";

const App = () => {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />

    </div>
  );
}

export default App;
