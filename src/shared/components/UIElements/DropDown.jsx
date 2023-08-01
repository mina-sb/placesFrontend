import React from "react";
import "./DropDown.css";

const DropDown = (props) => {
  const dropdown = (
    <ul className="dropdown-list">
      <li></li>
      <li></li>
      <li>LOGOUT</li>
    </ul>
  );
  return <div className="dropdown">{props.show ? dropdown : ""}</div>;
};

export default DropDown;
