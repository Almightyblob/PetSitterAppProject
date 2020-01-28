import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "../src/components/auth/Signup";
import Login from "../src/components/auth/Login";
import AddCustomers from "./pages/AddCustomers";
import AddPets from "./pages/AddPets";
import CustomerList from "./pages/CustomerList";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/auth/addcustomer" component={AddCustomers} />
      <Route exact path="/auth/addpet" component={AddPets} />
      <Route exact path="/auth/customer" component={CustomerList} />
    </div>
  );
};

export default App;
