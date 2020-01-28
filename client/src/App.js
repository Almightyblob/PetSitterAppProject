import React, { Fragment, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "../src/components/auth/Signup";
import Login from "../src/components/auth/Login";
import AddCustomers from "./components/auth/AddCustomers";
import AddPets from "./components/auth/AddPets";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); //it runs only once, without [] it will run constantly
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <Route exact path="/auth/addcustomer" component={AddCustomers} />
          <Route exact path="/auth/addpet" component={AddPets} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
