import React from "react";
import Categoties from "./Categories";
import Products from "./Products";
import Layout from "../layers/layers";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex h-screen justify-between mx-28 py-10">
        <Categoties />
        <Products />
        {/* <Activities /> */}
      </div>
    </Layout>
  );
};
export default HomePage;
