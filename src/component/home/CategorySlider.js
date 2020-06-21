import React from "react";
import Slider from "react-slick";
const CategorySlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <h2 style={{ color: "#000" }}>Top Categories</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim Nullam nunc varius.
          </p>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="category_carosel_inner">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/cat_img1.png"
              alt="name"
            />
          </div>
        </div>
        <div>
          <div className="category_carosel_inner">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/cat_img2.png"
              alt="name"
            />
          </div>
        </div>
        <div>
          <div className="category_carosel_inner">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/cat_img3.png"
              alt="name"
            />
          </div>
        </div>
        <div>
          <div className="category_carosel_inner">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/cat_img4.png"
              alt="name"
            />
          </div>
        </div>
        <div>
          <div className="category_carosel_inner">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/cat_img5.png"
              alt="name"
            />
          </div>
        </div>
        <div>
          <div className="category_carosel_inner">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/cat_img6.png"
              alt="name"
            />
          </div>
        </div>
        <div>
          <div className="category_carosel_inner">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/cat_img7.png"
              alt="name"
            />
          </div>
        </div>
        <div>
          <div className="category_carosel_inner">
            <img
              src="https://bestwebcreator.com/shopwise/demo/assets/images/cat_img4.png"
              alt="name"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CategorySlider;
