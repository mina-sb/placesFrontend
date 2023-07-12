import React, { useState } from "react";
import "./NavLinks.css";
import Button from "../FormElements/Button";

const NavLinks = () => {
  return (
    <ul class="nav-links">
      <li>
        <Button href="link" class="outline-button">
          All Users
        </Button>
      </li>
      <li>
        <Button href="link">Authentication</Button>
      </li>
    </ul>
  );
};

export default NavLinks;
