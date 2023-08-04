import React, { useContext, useEffect } from "react";
import "./DropDown.css";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const DropDown = (props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const closeMenu = (e) => {
    if (e.target.id === "profile") {
      navigate(`/${auth.userId}/places`);
      document.removeEventListener("mousedown", closeMenu);
    }
    if (e.target.id === "logout") {
      auth.logout();
      document.removeEventListener("mousedown", closeMenu);
    } else {
      props.close();
    }
  };
  useEffect(() => {
    if (props.show) {
      document.addEventListener("mousedown", closeMenu);
    }
  }, [props.show]);

  const dropdown = (
    <ul className="dropdown-list">
      <li></li>
      <li>
        <div id="profile">
          <i class="bx bxs-user-rectangle"></i> My Profile
        </div>
      </li>
      <li>
        <div id="logout">
          <i class="bx bxs-exit"></i>
          Logout
        </div>
      </li>
    </ul>
  );
  return <div className="dropdown">{props.show ? dropdown : ""}</div>;
};

export default DropDown;
