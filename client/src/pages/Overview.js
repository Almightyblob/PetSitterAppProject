import React from "react";
import FormLayout from "../components/layout/Form";

const Overview = () => {
  return (
    <FormLayout>
      <div className="columns box is-multiline has-text-centered">
        <p className="column is-full">
          <span className="has-text-weight-semibold has-text-link">
            Total summary:{" "}
          </span>
          ...... €
        </p>
        <p className="column is-full">
          <span className="has-text-weight-semibold has-text-primary">
            2020:{" "}
          </span>
          ...... €
        </p>
        <p className="column is-full">
          <span className="has-text-weight-semibold has-text-primary">
            2019:{" "}
          </span>
          ...... €
        </p>
        <p className="column is-full">
          <span className="has-text-weight-semibold has-text-primary">
            2018:{" "}
          </span>
          ...... €
        </p>
        <p className="column is-full">
          <span className="has-text-weight-semibold has-text-primary">
            2017:{" "}
          </span>
          ...... €
        </p>
      </div>
    </FormLayout>
  );
};

export default Overview;
