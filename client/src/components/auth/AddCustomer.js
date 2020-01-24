import React from "react";
import FormLayout from "../../layout/Form";

const Signup = () => {
  return (
    <FormLayout>
      <div className="box columns is-centered">
        <div className="column">
          <h1 className="is-size-3">Add a Customer</h1>
          <br />
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Name"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                name="address"
                placeholder="Address"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-home"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="phone"
                placeholder="Phone Number"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-mobile-alt"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="priceperday"
                placeholder="Price per Day"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-euro-sign"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-link">Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default Signup;
