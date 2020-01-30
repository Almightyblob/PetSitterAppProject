import React, { useState } from "react";
import FormLayout from "../components/layout/Form";
import axios from "axios";

const AddPet = () => {
  const [formData, setFormData] = useState({
    pettype: "",
    petname: "",
    petcomments: ""
  });

  const { pettype, petname, petcomments } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    const newPet = {
      pettype,
      petname,
      petcomments
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newPet);
      const res = await axios.post("/api/pets", body, config);
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <FormLayout>
      <div className="box columns is-centered">
        <div className="column">
          <h1 className="is-size-3">Add a Pet</h1>
          <form onSubmit={e => onSubmit(e)}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Type of Pet"
                  name="pettype"
                  value={pettype}
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
                  placeholder="Name"
                  name="petname"
                  value={petname}
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
                  type="textarea"
                  placeholder="Comments"
                  name="petcomments"
                  value={petcomments}
                  onChange={e => onChange(e)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-mobile-alt"></i>
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

export default AddPet;
