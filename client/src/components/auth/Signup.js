import React, { useState } from "react";
import FormLayout from "../../layout/Form";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post("/api/users", body, config);
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <FormLayout>
      <div className="box columns is-centered">
        <div className="column">
          <h1 className="is-size-3">Create new account</h1>
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
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  type="submit"
                  className="button is-link"
                  value="Sign up"
                />
              </p>
            </div>
          </form>
        </div>
      </div>
    </FormLayout>
  );
};

export default Signup;
