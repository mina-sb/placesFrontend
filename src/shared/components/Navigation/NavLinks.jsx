import React, { useState } from "react";
import "./NavLinks.css";
import Button from "../FormElements/Button";

const NavLinks = () => {
  const [activeTab, setActiveTab] = useState("users");

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
      </li>
    </ul>
  );
};

export default NavLinks;
