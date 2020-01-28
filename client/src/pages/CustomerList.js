import React, { useState } from "react";
import axios from "axios";
import CustomerCard from "../components/CustomerCard";

const CustomerList = () => {
  var [blurp, setBlurp] = useState([]);

  async function componentDidMount() {
    try {
      const list = await axios.get("/api/customers");
      setBlurp((blurp = list.data));
      console.log(blurp);
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount();

  return (
    <div>
      <h1>Customer List</h1>
      <p>{blurp[0].name}</p>
      )}
    </div>
  );
};

export default CustomerList;
