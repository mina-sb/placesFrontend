import React, { useContext, useState } from "react";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { AuthContext } from "../../context/auth-context";
import DropDown from "../UIElements/DropDown";

const MainNavigation = (props) => {
  const [isNightMode, setIsNightMode] = useState(false);
  const user = useContext(AuthContext);

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
            <img
              className="nav-profileImg"
              onClick={props.setOpen}
              src={`http://localhost:5000/${user.image}`}
            />
            <DropDown show={props.showMenu} />
          </div>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
