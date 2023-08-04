import React, { useContext, useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { AuthContext } from "../../context/auth-context";
import DropDown from "../UIElements/DropDown";

const MainNavigation = (props) => {
  const [isNightMode, setIsNightMode] = useState(false);
  const auth = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeThemeMode = () => {
    if (!isNightMode) {
      document.body.classList.add("night");
      setIsNightMode((prevMode) => !prevMode);
    } else {
      document.body.classList.remove("night");
      setIsNightMode((prevMode) => !prevMode);
    }
  };

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks />
      </SideDrawer>
      <MainHeader>
        <nav className="main-navigation">
          <a class="logo">Places</a>
          <div className="navlinks-container">
            <NavLinks />
          </div>
          <div className="navigation-buttons">
            <i
              class="bx bx-menu navigation-button"
              onClick={openDrawerHandler}
            ></i>
            <i
              class="bx bx-moon navigation-button"
              onClick={changeThemeMode}
            ></i>
            {auth.isLoggedIn && (
              <img
                className="nav-profileImg"
                onClick={openMenu}
                src={`http://localhost:5000/${auth.image}`}
              />
            )}

            {auth.isLoggedIn && (
              <DropDown show={isMenuOpen} close={closeMenu} />
            )}
          </div>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
