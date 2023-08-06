import React from "react";
import Users from "./user/pages/Users";
import AboveTheFold from "./AboveTheFold";

import styles from "./Main.module.css";
import Places from "./place/components/Places";

const Main = () => {
  return (
    <React.Fragment>
      <AboveTheFold />
      <Users />
      <Places />
    </React.Fragment>
  );
};

export default Main;
