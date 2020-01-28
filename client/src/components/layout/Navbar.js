import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Burger.js";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/auth/customers" className="button">
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
            <a className="button is-info" onClick={logout} href="/">
              <i className="fas fa-sign-out-alt"></i>
              <span className="is-hidden-mobile">
                <strong>Logout</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  const guestLinks = (
    <div id="navbarBasicExample" className="navbar-menu">
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
  );

  return (
    <div className="has-margin-bottom-50">
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
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
