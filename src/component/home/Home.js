import React from "react";
import Layout from "../layout/Layout";
import HomeSlider from "./HomeSlider";
import Offer from "./Offer";
import CategorySlider from "./CategorySlider";
import Products from "../products/Products";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <Layout>
      <HomeSlider />
      <Offer></Offer>
      <CategorySlider></CategorySlider>
      <Products title={"Exclusive Product"} />
      <div className="container mt-5">
        <Link to="/">
          <img src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img11.png" alt="name" />
        </Link>
      </div>
      <div className="container mt-5">
        <Products title={"Trending Product"} />
      </div>
      <div className="footer" style={{ marginTop: "100px" }}>
        Footer Area
      </div>
    </Layout>
  );
};

export default Home;
