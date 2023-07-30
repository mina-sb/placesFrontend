import React, { useState } from "react";
import MainHeader from "./MainHeader";

import "./MainNavigation.css";
import NavLinks from "./NavLinks";

const MainNavigation = (props) => {
  const [isNightMode, setIsNightMode] = useState(false);
  const changeThemeMode = () => {
    if (!isNightMode) {
      document.body.classList.add("night");
      setIsNightMode((prevMode) => !prevMode);
    } else {
      document.body.classList.remove("night");
      setIsNightMode((prevMode) => !prevMode);
    }
  };

  return (
    <MainHeader>
      <nav className="main-navigation">
        <a class="logo">Places</a>
        <NavLinks />
        <div className="navigation-buttons">
          <i class="bx bx-menu navigation-button"></i>
          <i class="bx bx-moon navigation-button" onClick={changeThemeMode}></i>
        </div>
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
