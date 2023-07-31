import React, { useContext, useState } from "react";
import "./NavLinks.css";
import Button from "../FormElements/Button";
import { AuthContext } from "../../context/auth-context";

const NavLinks = () => {
  const [activeTab, setActiveTab] = useState("users");
  const auth = useContext(AuthContext);

  return (
    <ul class="nav-links">
      <li>
        <Button
          to="/"
          class={`${
            activeTab === "users" ? "main-color-button" : "outline-button"
          }`}
          onClick={() => {
            setActiveTab("users");
          }}
        >
          All Users
        </Button>
      </li>
      <li>
        {auth.isLoggedIn ? (
          <Button
            class={`${
              activeTab === "auth" ? "main-color-button" : "outline-button"
            }`}
            to="/auth"
            onClick={auth.logout}
          >
            LOG OUT
          </Button>
        ) : (
          <Button
            class={`${
              activeTab === "auth" ? "main-color-button" : "outline-button"
            }`}
            to="/auth"
            onClick={() => {
              setActiveTab("auth");
            }}
          >
            Authentication
          </Button>
        )}
      </li>
    </ul>
  );
};

export default NavLinks;
