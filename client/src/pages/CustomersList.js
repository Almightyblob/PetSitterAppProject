
import React, { useState, useEffect, Fragment } from "react";
<<<<<<< HEAD
import CustomerCard from "../components/CustomerCard";
=======
import CustomerCard from "../components/layout/CustomerCard";

>>>>>>> 1ab5eac2aa738f9386e6ea2c5fc10f23ad5352db
import axios from "axios";

function CustomersList() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const list = await axios.get("/api/customers");

    const items = list.data;
    setItems(items);
    console.log(items);
  };
  return (
    <Fragment>
      {items.map(item => (
        <CustomerCard
          name={item.name}
          address={item.address}
          phone={item.phone}
          priceperday={item.priceperday}
          id={item._id}
          key={item._id}
        />
      ))}
    </Fragment>
  );
}
export default CustomersList;
