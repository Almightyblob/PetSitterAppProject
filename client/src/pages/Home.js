import React, { Fragment } from "react";
import FormLayout from "../components/layout/Form";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <FormLayout>
        <img src="../images/cat13.png" alt="cat"></img>
      </FormLayout>
    </Fragment>
  );
};

export default Home;
