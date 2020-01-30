import React from "react";
import { Link } from "react-router-dom";
class PageNotFound extends React.Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half has-text-centered">
          <h2 className="is-size-2 has-text-danger has-text-weight-bold	">
            The Page doesn't exist{" "}
          </h2>
          <p className="has-margin-bottom-40">
            <Link to="/">Go to the Home Page </Link>
          </p>
          <img src="/images/error.png" width="70%" alt="" />
        </div>
      </div>
    );
  }
}
export default PageNotFound;
