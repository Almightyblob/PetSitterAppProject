import React from "react";

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half has-text-centered">
          <h2 className="is-size-2 has-text-danger has-text-weight-bold	has-margin-bottom-40">
            The page doesn't exist
          </h2>
          <img src="/images/error.png" width="70%" alt="" />
        </div>
      </div>
    );
  }
}
export default PageNotFound;
