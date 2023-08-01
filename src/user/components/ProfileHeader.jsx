import React, { useContext, useEffect, useState } from "react";
import styles from "./ProfileHeader.module.css";
import Svg from "../../shared/assets/Svg";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const ProfileHeader = () => {
  const userId = useParams().userId;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser();
  }, [userId]);

  const getUser = async () => {
    let responseData;
    try {
      responseData = await sendRequest(
        `http://localhost:5000/api/users/${userId}`
      );
      setUser(responseData);
    } catch (err) {}
  };

  console.log(user);
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {!isLoading && user && (
        <header className={styles.header}>
          <Svg />
          <div className={styles.profile_data}>
            <img
              className={styles.profileImg}
              src={`http://localhost:5000/${user.image}`}
            />
            <h3>{user.name}</h3>
          </div>
        </header>
      )}
    </React.Fragment>
  );
};

export default ProfileHeader;
