import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobBox = ({
  jobid,
  startdate,
  enddate,
  numberofdays,
  totalprice,
  paid,
  archived,
  description,
  customerid
}) => {
  const [state, setState] = useState({
    jobid,
    startdate,
    enddate,
    numberofdays,
    totalprice,
    paid,
    archived,
    description,
    customerid
  });
  if (archived) {
    return <div></div>;
  }
  if (paid) {
    return (
      <div className="columns is-full">
        <div key={state.jobid} className="columns box has-margin-bottom-20">
          <div className="column is-2">
            <p className="has-text-weight-semibold">Start:</p>
            <p className="has-text-weight-semibold has-text-primary">
              {state.startdate}
            </p>
          </div>
          <div className="column is-2">
            <p className="has-text-weight-semibold">End:</p>
            <p className="has-text-weight-semibold has-text-primary">
              {state.enddate}
            </p>
          </div>
          <div className="column is-1 has-text-weight-semibold">
            <p>Days:</p>
            <p>{state.numberofdays}</p>
          </div>
          <div className="column is-1 has-text-weight-semibold">
            <p>€/Day:</p>
            <p>{state.priceperday}</p>
          </div>
          <div className="column is-1 has-text-weight-semibold">
            <p>Total €:</p>
            <p>{state.totalprice}</p>
          </div>
          <div class="column field is-2 has-text-weight-semibold ">
            <p>Paid:</p>
            <p class="control">
              <span class="select">
                <select>
                  <option>no</option>
                  <option selected>yes</option>
                </select>
              </span>
            </p>
          </div>
          <div className="column is-3">
            <p className="has-text-weight-semibold">Comments:</p>
            <p>{state.description}</p>
          </div>
        </div>

        <div className="columns has-margin-bottom-60 has-margin-top-20">
          <Link
            to=""
            className="button is-info has-text-weight-semibold has-margin-right-30 is-fullwidth has-margin-bottom-10"
          >
            Edit
          </Link>

          <Link
            to=""
            className="button is-danger has-text-weight-semibold has-margin-right-30 is-fullwidth has-margin-bottom-10"
          >
            Delete
          </Link>

          <Link
            to=""
            className="button is-warning has-text-weight-semibold is-fullwidth has-margin-bottom-15"
          >
            Archive
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="column is-full">
        <div key={state.jobid} className="columns box has-margin-bottom-20">
          <div className="column is-2">
            <p className="has-text-weight-semibold">Start:</p>
            <p className="has-text-weight-semibold has-text-primary">
              {state.startdate}
            </p>
          </div>
          <div className="column is-2">
            <p className="has-text-weight-semibold">End:</p>
            <p className="has-text-weight-semibold has-text-primary">
              {state.enddate}
            </p>
          </div>
          <div className="column is-1 has-text-weight-semibold">
            <p>Days:</p>
            <p>{state.numberofdays}</p>
          </div>
          <div className="column is-1 has-text-weight-semibold">
            <p>€/Day:</p>
            <p>{state.priceperday}</p>
          </div>
          <div className="column is-1 has-text-weight-semibold">
            <p>Total €:</p>
            <p>{state.totalprice}</p>
          </div>
          <div class="column field is-2 has-text-weight-semibold ">
            <p>Paid:</p>
            <p class="control">
              <span class="select">
                <select>
                  <option selected>no</option>
                  <option>yes</option>
                </select>
              </span>
            </p>
          </div>
          <div className="column is-3">
            <p className="has-text-weight-semibold">Comments:</p>
            <p>{state.description}</p>
          </div>
        </div>

        <div className="columns has-margin-bottom-60 has-margin-top-20">
          <Link
            to=""
            className="button is-info has-text-weight-semibold has-margin-right-30 is-fullwidth has-margin-bottom-10"
          >
            Edit
          </Link>

          <Link
            to=""
            className="button is-danger has-text-weight-semibold has-margin-right-30 is-fullwidth has-margin-bottom-10"
          >
            Delete
          </Link>

          <Link
            to=""
            className="button is-warning has-text-weight-semibold is-fullwidth has-margin-bottom-15"
          >
            Archive
          </Link>
        </div>
      </div>
    );
  }
};

export default JobBox;
