import React, { useState } from "react";
import { FaTimes} from "react-icons/fa";
import { RiComputerLine, RiMenu2Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const MainMenu = () => {
  const [open, setOpen] = useState("0px");

  return (
    <div className="main-menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 col-sm-6 col-3">
            <button
              onClick={() => {
              
                open === "0px" ? setOpen("500px") : setOpen("0px");
              }}
              className="btn btn-danger btn-category"
            >
              <span>All Categories </span>
              {open === "0px" ? <RiMenu2Line /> : <FaTimes />}
            </button>

            <div
              className="all_nav"
              style={{ height: open, transition: "height .4 ease-in" }}
            >
              <ul>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">
                    Computer
                    <span className="right_icon">
                      <IoIosArrowForward />
                    </span>
                  </Link>
                </li>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">
                    Mobile & Tablet
                    <span className="right_icon">
                      <IoIosArrowForward />
                    </span>
                  </Link>
                </li>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">
                    Camera
                    <span className="right_icon">
                      <IoIosArrowForward />
                    </span>
                  </Link>
                </li>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">
                    Accessories
                    <span className="right_icon">
                      <IoIosArrowForward />
                    </span>
                  </Link>
                </li>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">Gaming</Link>
                </li>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">Watches</Link>
                </li>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">Tv & Smart Box</Link>
                </li>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">Mouse</Link>
                </li>
                <li>
                  <span>
                    <RiComputerLine />
                  </span>
                  <Link to="/">Home Audio</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-9">
            <nav className="navbar navbar-expand-lg navbar-light  secoend_navbar">
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/test">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      News Feed
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link disabled"
                      to="#"
                      aria-disabled="true"
                    >
                      Disabled
                    </Link>
                  </li>
                </ul>
              </div>
             <span className="icon_phone"><FiPhoneCall /> </span><span className="ml-4 phone_number">01750638163</span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
