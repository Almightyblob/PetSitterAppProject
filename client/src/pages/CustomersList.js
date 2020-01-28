import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
// import CustomerCard from "../components/layout/CustomerCard";

function CustomersList() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const list = await axios.get("/api/customers");
    // const items = await list.json();

    const items = list.data;
    setItems(items);
    console.log(items);
  };
  return (
    <div>
      <h1>List of all customers:</h1>
      {items.map(item => (
        <p key={item._id}>
          <Link to={`/customer/${item._id}`}>
            <span className="has-margin-50">Name: {item.name}</span>
            <span className="has-margin-50">Address: {item.address}</span>
            <span className="has-margin-50">Phone: {item.phone}</span>
            <span className="has-margin-50">
              Price per day: {item.priceperday}
            </span>
          </Link>
        </p>
      ))}
    </div>
  );
}
export default CustomersList;
//-------------please read:) ----------------------------
//DOM: Maybe you can put this in table? I just added margin to make it visible
//DOM: Please delete comments after you check it and everything what we don't need connected to CustomersList
//DOM: I added links to /customer/id - I am leaving styling and creating a single page for customer.
// I was follwoing wthis guy, he is creating a single page as well: https://www.youtube.com/watch?v=Law7wfdg_ls

//-------------------------Your code below-----------------
// const CustomersList = () => {
//   var [blurp, setBlurp] = useState([]);

//   async function componentDidMount() {
//     try {
//       const list = await axios.get("/api/customers");
//       setBlurp((blurp = list.data));
//       console.log(blurp);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   componentDidMount();

//   return (
//     <div>
//       <h1>Customer List</h1>
//       <p>{blurp[1].name}</p>
//     </div>
//   );
// };

// export default CustomersList;
