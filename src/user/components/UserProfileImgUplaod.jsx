import React, { useContext, useEffect, useState } from "react";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import defaultImg from "../../shared/assets/6369737.png";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./UserProfileImgUplaod.css";

const UserProfileImgUplaod = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  const [img, setImg] = useState(null);
  const [deletedImg, setDeletedImg] = useState(false);

  const profileImgSubmitHandler = async (event) => {
    event.preventDefault();
    let responseData;
    try {
      const formData = new FormData();
      formData.append("image", img);

      responseData = await sendRequest(
        import.meta.env.VITE_APP_BACKEND_URL + `/users/${auth.userId}/img`,
        "PATCH",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
    } catch (err) {}

    auth.login(
      responseData.userId,
      auth.token,
      responseData.name,
      responseData.image
    );
  };
  const deleteImgHandler = async (event) => {
    event.preventDefault();
    let responseData;
    try {
      const formData = new FormData();
      formData.append("image", "");
      responseData = await sendRequest(
        import.meta.env.VITE_APP_BACKEND_URL + `/users/${auth.userId}/img`,
        "DELETE",
        formData,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
    } catch (err) {}

    auth.login(
      responseData.userId,
      auth.token,
      responseData.name,
      responseData.image
    );
    setDeletedImg(true);
  };

  return (
    <React.Fragment>
      <ImageUpload
        id="image"
        deletedImg={deletedImg}
        setDeletedImg={setDeletedImg}
        profile={true}
        defaultImg={
          props.img
            ? import.meta.env.VITE_APP_ASSET_URL + `/${props.img}`
            : defaultImg
        }
        saveImg={profileImgSubmitHandler}
        onInput={setImg}
      />
      <span className="delete_btn" onClick={deleteImgHandler}>
        <i class="bx bx-trash"></i>
      </span>
    </React.Fragment>
  );
};

export default UserProfileImgUplaod;
