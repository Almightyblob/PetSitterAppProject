import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "../App.scss";
import Calendar from "../components/myCalendar";
// import CustomerCard from "../components/layout/CustomerCard";
import { Link } from "react-router-dom";
function CustomerDetails(props) {
  useEffect(() => {
    fetchItems();
  }, [0]);
  const [items, setItems] = useState(null);
  const fetchItems = async () => {
    const customer = await axios.get(`/api/customers/${props.match.params.id}`);
    const items = customer.data;
    setItems(items);
  };

  return items ? (
    <Fragment>
      <div className="columns">
        <div className="column is-8 is-offset-2 is-8-mobile is-offset-2-mobile">
          <h3 className="is-size-3 has-text-weight-semibold has-text-primary has-text-centered-mobile has-margin-bottom-20">
            CUSTOMER
          </h3>

          <div className="columns box has-margin-bottom-40">
            <p className="column is-one-quarter has-text-weight-semibold has-text-primary has-margin-right-20">
              {items.name}
            </p>
            <p className="column is-one-quarter has-margin-right-20">
              <i className="fas fa-home"></i> {items.address}
            </p>
            <p className="column is-one-quarter has-margin-right-20">
              <i className="fas fa-mobile-alt"></i> {items.phone}
            </p>
            <p className="column is-one-quarter has-margin-right-20">
              <i className="fas fa-euro-sign"></i> {items.priceperday} EUR
            </p>
          </div>
          <div className="columns">
            <Link
              to={`/auth/customers/edit/${props.match.params.id}`}
              className="button is-info has-text-weight-semibold is-overlay has-margin-bottom-15 has-margin-right-30 is-fullwidth"
            >
              Edit customer
            </Link>

            <Link
              onClick={() =>
                axios
                  .delete(`/api/customers/${props.match.params.id}`)
                  .then(() => window.location.reload())
                  .catch(err => console.log(err))
              }
              to="/auth/customers"
              className="button is-danger has-text-weight-semibold has-margin-bottom-10 is-fullwidth"
            >
              Delete customer
            </Link>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-8 is-offset-2 is-8-mobile is-offset-2-mobile">
          <div className="columns">
            <div className="column">
              <h3 className="is-size-3 has-text-weight-semibold has-text-info has-text-centered-mobile has-margin-bottom-20 has-margin-top-40">
                PETS
              </h3>
            </div>
          </div>
          {items.pets &&
            items.pets.map(pet => (
              <div key={pet._id} className="columns box has-margin-bottom-40">
                <p className="column is-one-quarter has-text-weight-semibold has-text-primary has-margin-right-20">
                  {pet.name}
                </p>
                <p className="column is-one-quarter has-margin-right-20">
                  {pet.type}
                </p>
                <div className="column is-one-quarter has-margin-right-20">
                  <p className="has-text-weight-semibold">Comments:</p>
                  <p>{pet.comments}</p>
                </div>
                <div className="column is-one-quarter is-multiline">
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
                </div>

                {/* <img src={pet.photo} alt="" /> */}
              </div>
            ))}

          <div className="columns">
            <button
              onClick={() =>
                props.history.push("/auth/addpet", {
                  id: props.match.params.id
                })
              }
              className="button is-primary has-text-weight-semibold has-margin-top-40 is-fullwidth"
            >
              Add pet
            </button>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-8 is-offset-2 is-8-mobile is-offset-2-mobile is-paddingless">
          <div className="columns">
            <div className="column">
              <h3 className="is-size-3 has-text-weight-semibold has-text-info has-text-centered-mobile has-margin-bottom-20 has-margin-top-40">
                JOB
              </h3>
            </div>
          </div>

          {items.jobs &&
            items.jobs.map(job => (
              <div key={job._id} className="columns box has-margin-bottom-40">
                <p className="column is-1 has-text-weight-semibold has-text-primary has-margin-right-20">
                  {job.startdate}
                </p>
                <p className="column is-1 has-margin-right-20">{job.enddate}</p>
                <div className="column is-1 has-margin-right-20">
                  <p className="has-text-weight-semibold">Days:</p>
                  <p>{job.numberofdays}</p>
                </div>
                <div className="column is-1 has-margin-right-20">
                  <p className="has-text-weight-semibold">Daily Price:</p>
                  <p>{items.priceperday}</p>
                </div>
                <div className="column is-1 has-margin-right-20">
                  <p className="has-text-weight-semibold">Total:</p>
                  <p>{job.totalprice}</p>
                </div>
                <div className="column is-1 has-margin-right-20">
                  <p className="has-text-weight-semibold">Paid:</p>

                  <p>{job.paid}</p>
                </div>
                <div className="column is-1 has-margin-right-20">
                  <p className="has-text-weight-semibold">Comments:</p>
                  <p>{job.description}</p>
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
            ))}

          <button
            onClick={() =>
              props.history.push(`/auth/addjob/${props.match.params.id}`)
            }
            className="button is-warning has-text-weight-semibold has-margin-top-40 is-fullwidth"
          >
            Add Job
          </button>
        </div>
      </div>
      <div className="columns"></div>
      <div className="column is-8 is-offset-2 is-full-mobile is-paddingless has-padding-left-5-mobile has-padding-right-5-mobile mobileCalendarHeight has-margin-top-60">
        <Calendar />
      </div>
    </Fragment>
  ) : (
    <h1>Loading...</h1>
  );
}
export default CustomerDetails;
