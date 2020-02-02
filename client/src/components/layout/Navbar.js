import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Burger.js";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="columns has-padding-bottom-50 has-padding-top-15">
      <a
        className="column has-margin-left-30 has-margin-left-10-mobile"
        href="/"
      >
        <img src="../images/logoPetSitterApp.png" alt="logo" width="150px" />
      </a>
      <Link
        to="/auth/customers"
        className="button is-primary has-text-weight-bold has-margin-right-20 is-size-7-mobile has-margin-top-5"
      >
        Customers
      </Link>

      <Link
        to="/auth/addcustomer"
        className="button is-info has-text-weight-bold has-margin-right-20 is-size-7-mobile has-margin-top-5"
      >
        Add a customer
      </Link>

      <div className="has-margin-top-5 has-margin-right-30">
        <a
          className="button is-info is-size-7-mobile"
          onClick={logout}
          href="/"
        >
          <i className="fas fa-sign-out-alt"></i>
          <span className="has-text-weight-bold is-size-7-mobile">Logout</span>
        </a>
      </div>
    </div>
  );
  const guestLinks = (
    <div className="columns has-padding-bottom-50 has-padding-top-15">
      <a
        className="column has-margin-left-30 has-margin-left-10-mobile"
        href="/"
      >
        <img src="../images/logoPetSitterApp.png" alt="logo" width="150px" />
      </a>
      <Link
        to="/signup"
        className="button is-primary has-text-weight-bold has-margin-right-20 is-size-7-mobile has-margin-top-5"
      >
        Sign up
      </Link>

      <Link
        to="/login"
        className="button is-info has-text-weight-bold has-margin-right-30 is-size-7-mobile has-margin-top-5"
      >
        Log in
      </Link>
    </div>
  );

  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
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
