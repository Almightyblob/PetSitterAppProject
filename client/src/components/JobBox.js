import React, { useState } from "react";
import axios from "axios";
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

  return (
    <div key={state.jobid} className="columns box has-margin-bottom-40">
      <p className="column is-1 has-text-weight-semibold has-text-primary has-margin-right-20">
        {state.startdate}
      </p>
      <p className="column is-1 has-margin-right-20">{state.enddate}</p>
      <div className="column is-1 has-margin-right-20">
        <p className="has-text-weight-semibold">Days:</p>
        <p>{state.numberofdays}</p>
      </div>
      <div className="column is-1 has-margin-right-20">
        <p className="has-text-weight-semibold">Daily Price:</p>
        <p>{state.priceperday}</p>
      </div>
      <div className="column is-1 has-margin-right-20">
        <p className="has-text-weight-semibold">Total:</p>
        <p>{state.totalprice}</p>
      </div>
      <div className="column is-1 has-margin-right-20">
        <p className="has-text-weight-semibold">Paid:</p>
        <p>{state.paid}</p>
      </div>
      <div className="column is-1 has-margin-right-20">
        <p className="has-text-weight-semibold">Comments:</p>
        <p>{state.description}</p>
      </div>
      {/* <div className="column is-one-quarter is-multiline">
                  <Link
                    to={`/auth/pet/edit/${pet._id}`}
                    className="button is-info has-text-weight-semibold has-margin-bottom-15 has-margin-right-100 buttonwidth"
                  >
                    Edit
                  </Link>

                  <Link
                    onClick={() =>
                      axios
                        .delete(`/api/pets/${pet._id}`)
                        .then(() => window.location.reload())
                        .catch(err => console.log(err))
                    }
                    to={`/auth/customers/${props.match.params.id}`}
                    className="button is-danger has-text-weight-semibold has-margin-bottom-10 buttonwidth"
                  >
                    Delete
                  </Link>
                </div> */}

      {/* <img src={pet.photo} alt="" /> */}
    </div>
  );
};

export default JobBox;
