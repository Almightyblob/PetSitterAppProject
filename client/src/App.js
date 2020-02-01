import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "../src/components/auth/Signup";
import Login from "../src/components/auth/Login";
import AddCustomer from "./pages/AddCustomer";
import AddPets from "./pages/AddPets";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import CustomersList from "./pages/CustomersList";
import CustomerDetails from "./pages/CustomerDetails";
import PageNotFound from "./pages/PageNotFound";
import MyCalendar from "./components/myCalendar";
import AddJob from "./pages/AddJob";
import EditCustomer from "./pages/EditCustomer";
import "./App.scss";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); //it runs only once, without [] it will run constantly, similar to DidMount
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/auth/addcustomer" component={AddCustomer} />
            <Route exact path="/auth/addpet" component={AddPets} />
            <Route exact path="/auth/customers" component={CustomersList} />
            <Route
              exact
              path="/auth/customers/:id"
              component={CustomerDetails}
            />
            <Route
              exact
              path="/auth/customers/edit/:id"
              component={EditCustomer}
            />
            <Route exact path="/calendar" component={MyCalendar} />
            <Route exact path="/addjob/:id" component={AddJob} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
