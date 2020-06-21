import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 mt-2 offer">
            <Link className="offer_item" to="/">
              <img
                className="img-thumbnail"
                src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img7.jpg"
                alt="name"
               />
            </Link>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mt-2">
            <Link className="offer_item" to="/">
              <img
                className="img-thumbnail"
                src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img8.jpg"
                alt="name"
                />
            </Link>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mt-2">
            <Link className="offer_item" to="/">
              <img
                className="img-thumbnail"
                src="https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img9.jpg"
                alt="name"
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
