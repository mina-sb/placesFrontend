import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const UserInfoEdit = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      setFormData(
        {
          name: {
            value: props.name,
            isValid: true,
          },
          email: {
            value: props.email,
            isValid: true,
          },
        },
        true
      );
    };
    fetchPlace();
  }, [sendRequest, setFormData]);

  const userInfoUpdateSubmitHandler = async (event) => {
    let responseData;
    event.preventDefault();
    try {
      responseData = await sendRequest(
        import.meta.env.VITE_APP_BACKEND_URL + `/users/${auth.userId}`,
        "PATCH",
        JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          userId: auth.userId,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      props.getUser();
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && (
        <form onSubmit={userInfoUpdateSubmitHandler}>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            validators={["REQUIRED", "MIN(5)"]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValid={true}
            initialValue={props.name}
          />

          <Input
            id="email"
            type="text"
            placeholder="Email"
            validators={["REQUIRED", "MIN(5)"]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={inputHandler}
            initialValid={true}
            initialValue={props.email}
          />
          <Button
            type="submit"
            class="third-color-button"
            disabled={!formState.isValid}
          >
            Update Info
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UserInfoEdit;
