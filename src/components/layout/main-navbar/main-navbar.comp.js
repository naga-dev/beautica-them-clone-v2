import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

import { motion } from "framer-motion";

// Styles
import "./main-navbar.styles.scss";

const MainNavbar = () => {
  const columnTexts = [
    "maecenas commodos",
    "maecenas commodos",
    "maecenas commodos",
    "maecenas commodos",
    "maecenas commodos",
    "maecenas commodos",
  ];
  return (
    <div className="main-navbar font">
      <div className="container">
        <div className="main-navbar-content">
          <ul>
            <li className="trend-now-menu-element">
              <Link to="/shop">
                #trend now
                <FaChevronDown />
              </Link>
              <div className="trend-now-menu">
                <ul className="trend-now-submenu">
                  {columnTexts.map((item, idx) => (
                    <li key={idx}>
                      <Link to="#">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link to="/shop">makeup</Link>
            </li>
            <li>
              <Link to="/shop">nail</Link>
            </li>

            <motion.li
              className="beauty-accessories-menu-element"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link to="/shop">
                beauty accessories
                <FaChevronDown />
              </Link>
              <ul className="beauty-accessories-menu-content">
                <div className="container">
                  <div className="custom-row">
                    <div className="column">
                      <div className="column-title">lorem de dorus</div>
                      {columnTexts.map((item, idx) => (
                        <Link key={idx} to="#">
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="column">
                      <div className="column-title">millancelos a lanos</div>
                      {columnTexts.map((item, idx) => (
                        <Link key={idx} to="#">
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="column">
                      <div className="column-title">lynn cospoplis</div>
                      {columnTexts.map((item, idx) => (
                        <Link key={idx} to="#">
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="column">
                      <div className="column-title">nor loremirus</div>
                      {columnTexts.map((item, idx) => (
                        <Link key={idx} to="#">
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="column">
                      <div className="column-title">accessories</div>
                      {columnTexts.map((item, idx) => (
                        <Link key={idx} to="#">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </ul>
            </motion.li>
            <li>
              <Link to="/shop">body art</Link>
            </li>

            <li>
              <Link to="/shop">makeup tools</Link>
            </li>
            <li>
              <Link to="/shop">fragance</Link>
            </li>
            <li>
              <Link to="/lookbook">lookbook</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="limited-time font">
        <div className="container">
          <p className="font-bold">
            LIMITED-TIME OFFERS: MID-SEASON SALE UP TO 70% OFF ON SELECTED ITEMS.{" "}
            <Link to="/shop">SHOP NOW</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
