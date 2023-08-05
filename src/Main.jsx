import React from "react";
import Users from "./user/pages/Users";
import AboveTheFold from "./AboveTheFold";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <React.Fragment>
      <AboveTheFold />
      <Users />
    </React.Fragment>
  );
};

export default Main;
