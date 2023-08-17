import React, { useContext, useEffect, useState } from "react";
import styles from "./UserSetting.module.css";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Button from "../../shared/components/FormElements/Button";
import UserInfoEdit from "../components/UserInfoEdit";
import NotificationSettings from "../components/NotificationSettings";
import UserProfileImgUplaod from "../components/UserProfileImgUplaod";

const UserSetting = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState(true);
  const [activeClass, setActiveClass] = useState(styles.left);
  const [userImg, setUserImg] = useState("");

  const setNotificationTab = () => {
    setActiveTab(false);
    setActiveClass(styles.right);
  };
  const setInfoTab = () => {
    setActiveTab(true);
    setActiveClass(styles.left);
  };
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let responseData;
    try {
      responseData = await sendRequest(
        import.meta.env.VITE_APP_BACKEND_URL +`/users/${auth.userId}`
      );
      setUser(responseData);
      setUserImg(responseData.image);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && user && (
        <div className={styles.settings}>
          <div className={styles.img_edit_container}>
            <Card>
              <div className={styles.img_edit_container}>
                <h3>{user.name}</h3>
                <div className={styles.img}>
                  <UserProfileImgUplaod img={userImg} />
                </div>
                <span className={styles.img_info}>
                  Profile Settings Page Ui design Profile Settings Page Ui
                  design Profile Settings Page Ui design Profile
                </span>
              </div>
            </Card>
          </div>
          <div className={styles.info_edit}>
            <Card className="pad-0">
              <div className={styles.info_container}>
                <h3>Edit Profile</h3>
                <ul className={`${styles.tabs} ${activeClass}`}>
                  <li onClick={setInfoTab}>
                    <span className={styles.tab_title}>User Info</span>
                  </li>
                  <li onClick={setNotificationTab}>
                    <span className={styles.tab_title}>Notifications</span>
                  </li>
                </ul>
              </div>
              <div className={styles.line}></div>
              <div className={styles.info_container}>
                <div className={styles.tab_container}>
                  {activeTab && (
                    <UserInfoEdit
                      name={user.name}
                      email={user.email}
                      getUser={getUser}
                    />
                  )}
                  {!activeTab && <NotificationSettings />}
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserSetting;
