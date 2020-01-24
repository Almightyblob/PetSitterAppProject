import React from "react";
import Navbar from "../components/Navbar";
const Form = props => {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-4">
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};

export default Form;
