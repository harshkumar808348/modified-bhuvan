import React, { useState, useEffect } from "react";
import "./navbar.css";
import logoLight from "../../assets/bhuvanlogo1.png";
import logoDark from "../../assets/bhuvanlogo1.png";
import searchIcon from "../../assets/global-search-icon light.jpg";
import toggleImage from "../../assets/toogle.png";

const Navbar = ({ theme }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={visible ? "boxing" : "boxing hidden"}>
      <nav>
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">WIKI</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Bhuvan Store</a></li>
          <li><a href="#">Bhuvan Collaborators</a></li>
          <li><a href="#">Application Sector</a></li>
        </ul>

        <ul className="additional-items">
          <li className="logo-container">
            <img
              src={theme === "light" ? logoLight : logoDark}
              alt=" "
              className="logo"
            />
          </li>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
          {/* Add other additional items here */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
