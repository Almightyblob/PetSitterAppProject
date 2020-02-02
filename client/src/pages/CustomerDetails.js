import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "../App.scss";
import Calendar from "../components/myCalendar";
import CustomerBox from "../components/CustomerBox";
import PetBox from "../components/PetBox";
import JobBox from "../components/JobBox";
// import { Link } from "react-router-dom";
function CustomerDetails(props) {
  useEffect(() => {
    fetchItems();
  }, []);
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
          <CustomerBox
            name={items.name}
            address={items.address}
            phone={items.phone}
            id={props.match.params.id}
          />
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
              <PetBox
                history={props.history}
                key={pet._id}
                name={pet.name}
                type={pet.type}
                comments={pet.comments}
                petid={pet._id}
                customerid={props.match.params.id}
              />
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
              <h3 className="is-size-3 has-text-weight-semibold has-text-warning has-text-centered-mobile has-margin-bottom-5 has-margin-top-40">
                JOB
              </h3>
            </div>
          </div>

          {items.jobs &&
            items.jobs.map(job => (
              <JobBox
                key={job._id}
                jobid={job._id}
                startdate={job.startdate}
                enddate={job.enddate}
                numberofdays={job.numberofdays}
                priceperday={items.priceperday}
                totalprice={job.totalprice}
                paid={job.paid}
                archived={job.archived}
                description={job.description}
                customerid={props.match.params.id}
              />
            ))}

          <button
            onClick={() =>
              props.history.push(`/auth/addjob/${props.match.params.id}`)
            }
            className="button is-warning has-text-weight-semibold has-margin-top-20 is-fullwidth"
          >
            Add Job
          </button>
        </div>
      </div>
      <div className="columns"></div>
      <div className="column is-8 is-offset-2 is-full-mobile is-paddingless has-padding-left-5-mobile has-padding-right-5-mobile mobileCalendarHeight has-margin-top-60">
        <Calendar id={props.match.params.id} />
      </div>
    </Fragment>
  ) : (
    <h1>Loading...</h1>
  );
}
export default CustomerDetails;
