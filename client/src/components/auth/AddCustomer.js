import React from "react";
import FormLayout from "../../layout/Form";

const Signup = () => {
  return (
    <FormLayout>
      <div className="box columns is-centered">
        <div className="column">
          <h1 className="is-size-3">Add a Customer</h1>
          <br />
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" name="name" placeholder="Name" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                name="address"
                placeholder="Address"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-home"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="text"
                name="phone"
                placeholder="Phone Number"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-mobile-alt"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="text"
                name="priceperday"
                placeholder="Price per Day"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-euro-sign"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-link">Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default Signup;
