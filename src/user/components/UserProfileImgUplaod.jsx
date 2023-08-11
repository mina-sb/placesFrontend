import React, { useContext, useState } from "react";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import defaultImg from "../../shared/assets/6369737.png";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const UserProfileImgUplaod = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  const [img, setImg] = useState(null);

  const profileImgSubmitHandler = async (event) => {
    event.preventDefault();
    let responseData;
    try {
      const formData = new FormData();
      formData.append("image", img);

      responseData = await sendRequest(
        `http://localhost:5000/api/users/${auth.userId}/img`,
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

  return (
    <ImageUpload
      id="image"
      profile={true}
      defaultImg={props.img ? `http://localhost:5000/${props.img}` : defaultImg}
      saveImg={profileImgSubmitHandler}
      onInput={setImg}
    />
  );
};

export default UserProfileImgUplaod;
