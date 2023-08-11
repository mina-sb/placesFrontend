import React, { useContext, useEffect } from "react";
import "./DropDown.css";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const DropDown = (props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const closeMenu = (e) => {
    if (e.target.id === "setting" || e.target.parentElement.id === "setting") {
      navigate("/settings");
      document.removeEventListener("mousedown", closeMenu);
      props.close();
    }
    if (e.target.id === "profile" || e.target.parentElement.id === "profile") {
      navigate(`/${auth.userId}/places`);
      document.removeEventListener("mousedown", closeMenu);
      props.close();
    }
    if (e.target.id === "logout" || e.target.parentElement.id === "logout") {
      auth.logout();
      props.close();
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
      <li>
        <div id="setting">
          <i class="bx bxs-cog"></i> <span>Setting</span>
        </div>
      </li>
      <li>
        <div id="profile">
          <i class="bx bxs-user-rectangle"></i> <span>My Profile</span>
        </div>
      </li>
      <li>
        <div id="logout">
          <i class="bx bxs-exit"></i>
          <span>Logout</span>
        </div>
      </li>
    </ul>
  );
  return <div className="dropdown">{props.show ? dropdown : ""}</div>;
};

export default DropDown;
