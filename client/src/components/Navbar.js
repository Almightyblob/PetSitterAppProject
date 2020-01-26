import React from "react";
import { Link } from "react-router-dom";
// import {userExist} from "../utils/auth";
import "./Burger.js";
const Navbar = () => {
  // let user = userExist()
  return (
    <div className="has-margin-bottom-100">
      <nav
        className="navbar is-fixed-top is-light has-padding-5"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="../images/logoPetSitterApp.png" alt="logo" />
          </Link>
          <Link
            to="/"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/auth/customer" className="button">
                  <strong>Customers</strong>
                </Link>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/auth/addcustomer" className="button">
                  <strong>Add a customer</strong>
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-info">
                  <strong>Log in</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
