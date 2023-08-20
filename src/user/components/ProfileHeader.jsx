import React, { useEffect, useState } from "react";
import styles from "./ProfileHeader.module.css";
import Svg from "../../shared/assets/Svg";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import defaultImg from "../../shared/assets/6369737.png";

const ProfileHeader = () => {
  const userId = useParams().userId;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [user, setUser] = useState({});
  const [userImg, setUserImg] = useState("");
  useEffect(() => {
    getUser();
  }, [userId]);

  const getUser = async () => {
    let responseData;
    try {
      responseData = await sendRequest(
        import.meta.env.VITE_APP_BACKEND_URL + `/users/${userId}`
      );
      setUser(responseData);
      if (responseData.image) {
        setUserImg(
           `${responseData.image}`
        );
      } else {
        setUserImg(defaultImg);
      }
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />

      {!isLoading && user && (
        <header className={styles.header}>
          <Svg />
          <div className={styles.profile_data}>
            <img className={styles.profileImg} src={userImg} />
            <h3>{user.name}</h3>
          </div>
        </header>
      )}
    </React.Fragment>
  );
};

export default ProfileHeader;
