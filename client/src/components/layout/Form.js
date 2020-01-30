import React from "react";
const Form = props => {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">{props.children}</div>
    </div>
  );
};

export default Form;
