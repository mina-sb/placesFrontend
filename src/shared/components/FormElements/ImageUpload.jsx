import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    if (props.profile) {
      props.setDeletedImg(false);
    }

    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else if (!file) {
      setIsValid(false);
      fileIsValid = false;
    }
    if (!props.profile) {
      props.onInput(props.id, pickedFile, fileIsValid);
    } else {
      props.onInput(pickedFile);
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={props.profile ? "profile-img-container" : "image-upload"}>
        <div
          className={props.profile ? "profile-img-container" : "image-upload"}
        >
          {props.profile ? (
            !props.deletedImg ? (
              <img
                src={previewUrl ? previewUrl : props.defaultImg}
                alt="Preview"
                className="profileImg"
              />
            ) : (
              <img
                src={props.defaultImg}
                alt="Preview"
                className="profileImg"
              />
            )
          ) : (
            <div className="image-upload__preview">
              {previewUrl && <img src={previewUrl} alt="Preview" />}
              {!previewUrl && <p>Please pick an image.</p>}
            </div>
          )}
        </div>
        <div className={props.profile ? "btn-container" : ""}>
          <Button
            type="button"
            onClick={pickImageHandler}
            class="main-color-button btn-xs "
          >
            PICK IMAGE
          </Button>
          {props.profile ? (
            <Button
              type="button"
              class="third-color-button btn-xs"
              onClick={props.saveImg}
            >
              SAVE IMAGE
            </Button>
          ) : (
            !isValid && <span className="error-text">{props.errorText}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
