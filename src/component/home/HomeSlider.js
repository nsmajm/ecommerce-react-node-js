import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoPlay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <div
          className="slider_inner"
          style={{
            backgroundImage:
              "url(" +
              "https://bestwebcreator.com/shopwise/demo/assets/images/banner17.jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-7 slider-item">
                <h1 style={{color:'#000'}} >Beat Headphone</h1>
                <h5 className="mb-5">Get Up to 50% Off for Today</h5>
                <button className="btn btn-lg btn-danger">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="slider_inner"
          style={{
            backgroundImage:
              "url(" +
              "https://bestwebcreator.com/shopwise/demo/assets/images/banner18.jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-7 slider-item">
                <h1 style={{color:'#000'}}> Beat Headphone</h1>
                <h5 className="mb-5">Get Up to 50% Off for Today</h5>
                <button className="btn btn-lg btn-danger">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="slider_inner"
          style={{
            backgroundImage:
              "url(" +
              "https://bestwebcreator.com/shopwise/demo/assets/images/banner16.jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-7 slider-item">
                <h1> Beat Headphone</h1>
                <h5 className="mb-5">Get Up to 50% Off for Today</h5>
                <button className="btn btn-lg btn-danger">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </Slider>
  );
};

export default HomeSlider;
