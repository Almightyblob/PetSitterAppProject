import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
// import CustomerCard from "../components/layout/CustomerCard";

function CustomerDetails(props) {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState(null);
  const fetchItems = async () => {
    const customer = await axios.get(`/api/customers/${props.match.params.id}`);
    const items = customer.data;
    setItems(items);
    console.log(items.pets);
  };

  return items ? (
    <Fragment>
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <h1 className="is-size-3 has-text-weight-semibold has-text-primary has-margin-bottom-20">
            CUSTOMER
          </h1>
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
        </div>
      </div>
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <h1 className="is-size-3 has-text-weight-semibold has-text-info has-margin-bottom-20">
            PETS
          </h1>
        </div>
      </div>
      {items.pets &&
        items.pets.map(pet => (
          <div className="columns">
            <div
              key={pet._id}
              className="column box is-8 is-offset-2 has-margin-bottom-20"
            >
              <p className="is-size-5">{pet.name}</p>
              <p>{pet.type}</p>
              <img src={pet.photo} alt="" />
            </div>
          </div>
        ))}
    </Fragment>
  ) : (
    <h1>Loading</h1>
  );
}
export default CustomerDetails;
