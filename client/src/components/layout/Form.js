import React from "react";
const Form = props => {
  return (
    <div className="columns is-centered">
      <div className="column is-half-desktop is-full-mobile">
        {props.children}
      </div>
    </div>
  );
};

export default Form;
