import React, { useState, useEffect } from "react";
import mainLogo from "../images/main-logo.png";
import "./Header.scss";

const mobileLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Episodes", link: "/episodes/1" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // useEffect(() => {
  //   console.log("hello");
  //   console.log(window.innerWidth());
  //   if (window.innerWidth() > 500) {
  //     setShowMobileMenu(false);
  //   }
  // }, []);

  const handleMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleClickLink = () => {
    setShowMobileMenu(false);
  };
  return (
    <>
      <div
        style={{
          opacity: showMobileMenu ? 0.95 : 0,
          zIndex: showMobileMenu ? 100000 : -2000,
        }}
        className="mobile-menu"
      >
        <i onClick={handleMenuToggle} className="close-icon fas fa-times"></i>
        <div className="menu-links">
          {mobileLinks.map((item) => {
            return (
              <span>
                <a onClick={handleClickLink} href={item.link}>
                  {item.name}
                </a>
              </span>
            );
          })}
        </div>
      </div>
      <div id="main-header">
        <div className="container header-container">
          <i
            onClick={handleMenuToggle}
            className="mobile_menu_icon fas fa-bars"
          ></i>
          <a href="/">
            <img src={mainLogo.src} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
