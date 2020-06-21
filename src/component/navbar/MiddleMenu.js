import React from "react";
import MiniCart from "../cart/MiniCart";
import {FaUser, FaCartPlus, FaHeart } from "react-icons/fa";
import {RiShoppingCart2Line} from "react-icons/ri";
import { Link } from "react-router-dom";
const MiddleMenu = () => {
  return (
    <div className="middle-menu">
      <div className="container top-menu-area">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <h2><RiShoppingCart2Line />Testshop</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="search_form_area">
            <form action="#">
              <div className="form-group">
                <input className="form-control search_form" type="text" />
                <button className="btn btn-danger search_btn">Search</button>
              </div>
            </form>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto right_nav_icons">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="icon">
                    <FaUser />
                  </i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="icon">
                    <FaHeart />
                  </i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link header-cart">
                  <i className="icon">
                    <FaCartPlus />
                  </i>
                  <span>$159.00</span>    
                  <MiniCart></MiniCart>
                </Link>
                
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MiddleMenu;
