import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const ProductItem = ({ product }) => {
  return (
    <div className="col-6 col-md-3 col-sm-3 col-lg-3 mb-5">
      <div className="product_item">
        <Link to="/" className="product_images">
          <img
            className="img-thumbnail img-first"
            src={product.images}
            alt="name"
          />
          <img
            className="img-thumbnail img-hover"
            src="https://bestwebcreator.com/shopwise/demo/assets/images/el_hover_img5.jpg"
            alt="name"
          />
        </Link>
        <div className="product_info">
          <Link to="/">Nikon HD camera</Link>
          <div className="product_price">
            <span className="price">$68.00</span>
            <del>$99.00</del>
          </div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
