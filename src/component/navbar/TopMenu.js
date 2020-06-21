import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {

  return (
    <div className="top-menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="download_icon">
              <ul>
                <li>
                  <div className="offer">Free Ground Shipping Over $250</div>
                </li>
                <li>
                  <div className="download">Download App</div>
                </li>
                <li>
                  <Link to="/">
                    <i className="fab fa-apple"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-windows"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-android"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-4">
            <div className="right_menu d-flex justify-content-end">
              <ul>
                <li>
                  <Link to="/login">
                    <i className="fas fa-lock "></i> Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
