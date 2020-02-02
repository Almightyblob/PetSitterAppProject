import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const JobBox = ({
  jobid,
  startdate,
  enddate,
  numberofdays,
  totalprice,
  priceperday,
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
    priceperday,
    paid,
    archived,
    description,
    customerid
  });

  const setArchived = async () => {
    setState({ ...state, archived: true });
    let updatedJob = { ...state };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(updatedJob);
      await axios.put(`/api/jobs/${state.jobid}`, body, config);
      window.location.reload();
    } catch (err) {}
  };

  if (archived) {
    return <div></div>;
  }
  if (paid) {
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
            <p>Total:</p>
            <p>{state.totalprice} €</p>
          </div>
          <div className="column field is-2 has-text-weight-semibold ">
            <p>Paid:</p>
            <p className="control">
              <span className="select">
                <select>
                  <option>no</option>
                  <option selected>yes</option>
                </select>
              </span>
            </p>
          </div>
          <div className="column is-3 has-margin-left-20">
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

          <div
            onClick={setArchived}
            className="button is-warning has-text-weight-semibold is-fullwidth has-margin-bottom-15"
          >
            Archive
          </div>
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
            <p>Total:</p>
            <p>{state.totalprice} €</p>
          </div>
          <div className="column field is-2 has-text-weight-semibold ">
            <p>Paid:</p>
            <p className="control">
              <span className="select">
                <select>
                  <option selected>no</option>
                  <option>yes</option>
                </select>
              </span>
            </p>
          </div>
          <div className="column is-3 has-margin-left-20-desktop">
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

          <div
            onClick={setArchived}
            className="button is-warning has-text-weight-semibold is-fullwidth has-margin-bottom-15"
          >
            Archive
          </div>
        </div>
      </div>
    );
  }
};

export default JobBox;
