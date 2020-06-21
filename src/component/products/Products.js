import React from "react";
import ProductItem from "./ProductItem";

const Products = (props) => {
  const products = [
    {
      id: 1,
      images:
        "https://bestwebcreator.com/shopwise/demo/assets/images/el_img1.jpg",
    },
    {
      id: 2,
      images:
        "https://bestwebcreator.com/shopwise/demo/assets/images/el_img2.jpg",
    },
    {
      id: 3,
      images:
        "https://bestwebcreator.com/shopwise/demo/assets/images/el_img3.jpg",
    },
    {
      id: 4,
      images:
        "https://bestwebcreator.com/shopwise/demo/assets/images/el_img4.jpg",
    },
    {
      id: 5,
      images:
        "https://bestwebcreator.com/shopwise/demo/assets/images/el_img5.jpg",
    },
    {
      id: 6,
      images:
        "https://bestwebcreator.com/shopwise/demo/assets/images/el_img8.jpg",
    },
    {
      id: 7,
      images:
        "https://bestwebcreator.com/shopwise/demo/assets/images/el_img9.jpg",
    },
    {
      id: 8,
      images:
        "https://bestwebcreator.com/shopwise/demo/assets/images/el_img10.jpg",
    },
  ];
  return (
    <div className="container mt-5">
      <div className="product_header">
        <h1 className="text-center" style={{ color: "#000" }}>
          {props.title}
        </h1>
      </div>
      <div className="row mt-5">
        {products.map((data) => (
          <ProductItem key={data.id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
