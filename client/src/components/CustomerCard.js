import React from "react";

const CustomerCard = ({ name, address, phone, priceperday }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <p>Price per day: {priceperday} EUR</p>
    </div>
  );
};

export default CustomerCard;
