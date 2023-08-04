import React, { useContext } from "react";
import "./DropDown.css";
import { AuthContext } from "../../context/auth-context";

const DropDown = (props) => {
  const auth = useContext(AuthContext);

  const closeMenu = (e) => {
    if (e.target.id === "logout") {
      auth.logout();
    } else {
      props.close();
    }
  };
  document.addEventListener("mousedown", closeMenu);

  const dropdown = (
    <ul className="dropdown-list">
      <li></li>
      <li></li>
      <li id="logout">Logout</li>
    </ul>
  );
  return <div className="dropdown">{props.show ? dropdown : ""}</div>;
};

export default DropDown;
