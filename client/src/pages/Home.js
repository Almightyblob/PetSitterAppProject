import React, { Fragment } from "react";
import FormLayout from "../components/layout/Form";
import Navbar from "../components/layout/Navbar";
import Calendar from "../components/myCalendar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

const Home = ({ auth: { isAuthenticated, loading }, logout }) => {
  const Private = (
    <Fragment>
      <Navbar />
      <FormLayout>
        <Calendar />
      </FormLayout>
    </Fragment>
  );
  const Public = (
    <Fragment>
      <Navbar />
      <FormLayout>
        <img src="../images/cat13.png" alt="cat"></img>
      </FormLayout>
    </Fragment>
  );

  return (
    <div>
      {!loading && <Fragment>{isAuthenticated ? Private : Public}</Fragment>}
    </div>
  );
};
Home.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Home);
