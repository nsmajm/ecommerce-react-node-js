import React from 'react'
import { FaTimes} from "react-icons/fa";

const MiniCart = () => {
    return (
        <div className="mini-cart">
        <ul className="cart-body">
          <li>
            <div className="cart-item">
              <img
                src="https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb1.jpg"
                alt=""
              />
              <div className="product_description">
                <p> Variable product 001</p>
                <p>1*$78.00</p>
              </div>
              <span className="cart_icon">
                <FaTimes />
              </span>
            </div>
          </li>
          <li>
            <div className="cart-item">
              <img
                src="https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb1.jpg"
                alt=""
              />
              <div className="product_description">
                <p> Variable product 001</p>
                <p>1*$78.00</p>
              </div>
              <span className="cart_icon">
                <FaTimes />
              </span>
            </div>
          </li>
          <li>
            <div className="cart-item">
              <img
                src="https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb1.jpg"
                alt=""
              />
              <div className="product_description">
                <p> Variable product 001</p>
                <p>1*$78.00</p>
              </div>
              <span className="cart_icon">
                <FaTimes />
              </span>
            </div>
          </li>
          <li>
            <div className="cart-item">
              <img
                src="https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb1.jpg"
                alt=""
              />
              <div className="product_description">
                <p> Variable product 001</p>
                <p>1*$78.00</p>
              </div>
              <span className="cart_icon">
                <FaTimes />
              </span>
            </div>
          </li>
          <li>
            <div className="cart-item">
              <img
                src="https://bestwebcreator.com/shopwise/demo/assets/images/cart_thamb1.jpg"
                alt=""
              />
              <div className="product_description">
                <p> Variable product 001</p>
                <p>1*$78.00</p>
              </div>
              <span className="cart_icon">
                <FaTimes />
              </span>
            </div>
          </li>
        </ul>

        <div className="cart-footer">
          <p>
            Sub Total <span className="float-right">$100</span>
          </p>
          <div className="btn-group ">
            <button className="btn btn-secondary">View Cart</button>
            <button className="btn btn-danger">Checkout</button>
          </div>
        </div>
      </div>
   
    )
}

export default MiniCart ;
