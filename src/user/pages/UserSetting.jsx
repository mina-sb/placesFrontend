import React, { useContext, useEffect, useState } from "react";
import styles from "./UserSetting.module.css";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Button from "../../shared/components/FormElements/Button";

const UserSetting = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState(true);
  const [activeClass, setActiveClass] = useState(true);

  const activeTabHandler = () => {
    setActiveTab(!activeTab);
    activeTab ? setActiveClass(styles.left) : setActiveClass(styles.right);
  };
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let responseData;
    try {
      responseData = await sendRequest(
        `http://localhost:5000/api/users/${auth.userId}`
      );
      setUser(responseData);
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
                  <img
                    className={styles.profileImg}
                    src={`http://localhost:5000/${user.image}`}
                  />
                  <span className={styles.delete_btn}>
                    <i class="bx bx-trash"></i>
                  </span>
                </div>

                <Button class={`third-color-button btn-xs ${styles.mt_2}`}>
                  New Photo
                </Button>
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
                  <li className={styles.active} onClick={activeTabHandler}>
                    <span>User Info</span>
                  </li>
                  <li onClick={activeTabHandler}>
                    <span>Notifications</span>
                  </li>
                </ul>
              </div>
              <div className={styles.line}></div>
              <div className={styles.info_container}></div>
            </Card>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserSetting;
