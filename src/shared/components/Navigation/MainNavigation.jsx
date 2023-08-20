import React, { useContext, useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { AuthContext } from "../../context/auth-context";
import DropDown from "../UIElements/DropDown";
import defaultImg from "../../assets/6369737.png";

const MainNavigation = (props) => {
  const [isNightMode, setIsNightMode] = useState(false);
  const auth = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userImg, setuserImg] = useState("");

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

  useEffect(() => {
    if (auth.image) {
      setuserImg(`${auth.image}`);
    } else {
      setuserImg(defaultImg);
    }
  }, [auth]);

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
                src={userImg}
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
