import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import FormLayout from "../components/layout/Form";
import Alert from "../components/layout/Alert";
import { setAlert } from "../actions/alert";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const AddCustomer = ({ props, setAlert, isInDatabase }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    phone: "",
    priceperday: ""
  });
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const { name, address, phone, priceperday } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const checkPhoneNumberAvailability = async () => {
    try {
      await axios.post(
        "/api/customers/validation/phone-number",
        { phone },
        config
      );
      setAlert("Well done! This customer is new!", "primary");
    } catch (e) {
      setAlert(e.response.data, "danger");
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const customer = {
      name,
      address,
      phone,
      priceperday
    };

    try {
      const body = JSON.stringify(customer);
      axios
        .post("/api/customers", body, config)
        .then(resp => {
          debugger;
          setSubmitted(true);
          console.log("Response>>>>>>>>", resp);
          console.log("STATE>>>>>>>>", submitted);
        })
        .catch(err => {
          console.log("ERROR>>>>", err);
        });
      // if (body) {

      // props.history.push("/auth/addpet");
      // }
    } catch (err) {
      // console.log(err.response.data);
      setAlert("Couldn't add a customer", "danger", err); //Change an allert1
    }

    if (!submitted) {
      return <Redirect to="/auth/addpet" />;
    }
  };

  return (
    <FormLayout>
      <div className="box columns is-centered">
        <div className="column">
          <div className="has-padding-bottom-20">
            <Alert />
          </div>
          <h1 className="is-size-3">Add a Customer</h1>
          <form onSubmit={e => onSubmit(e)}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                  required
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
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={e => onChange(e)}
                  required
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
                  placeholder="Phone Number"
                  name="phone"
                  value={phone}
                  onChange={e => onChange(e)}
                  onBlur={checkPhoneNumberAvailability}
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
                  placeholder="Price per day"
                  name="priceperday"
                  value={priceperday}
                  onChange={e => onChange(e)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-euro-sign"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  type="submit"
                  className="button is-link"
                  value="Add Customer"
                />
              </p>
            </div>
          </form>
        </div>
      </div>
    </FormLayout>
  );
};
AddCustomer.propTypes = {
  isInDatabase: PropTypes.bool
};
const mapStateToProps = state => ({
  isInDatabase: state.auth.isInDatabase
});

export default connect(mapStateToProps, { setAlert: setAlert })(AddCustomer);
