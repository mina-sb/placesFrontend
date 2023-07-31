import React, { useContext, useState } from "react";
import "./Auth.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import img from "../../shared/assets/6369737.png";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const authSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.userId, responseData.token);
        navigate("/");
      } catch (err) {}
    } else {
      try {
      } catch (err) {}
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="auth-container">
        <img className="auth-img" src={img} />
        {isLoading && <LoadingSpinner asOverlay />}
        <h2 className="auth-container-title">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode ? (
            <Input
              type="text"
              id="name"
              placeholder="Name"
              onInput={inputHandler}
              validators={["REQUIRED", "MIN(4)"]}
            />
          ) : (
            ""
          )}
          <Input
            type="text"
            id="email"
            placeholder="Email"
            onInput={inputHandler}
            validators={["REQUIRED", "MIN(5)"]}
          />
          <Input
            type="text"
            id="password"
            placeholder="Password"
            onInput={inputHandler}
            validators={["REQUIRED"]}
          />
          <Button
            type="submit"
            class="full-width-button main-color-button"
            disabled={!formState.isValid}
          >
            {isLoginMode ? "Login" : "Join Now"}
          </Button>
        </form>
        <Button
          class="bg-color-button full-width-button"
          onClick={switchModeHandler}
        >
          <p className="link-to-signup-p">
            {isLoginMode
              ? "Don’t have an account?"
              : "Do you have an account already?"}
            <span className="main-color-text">
              {isLoginMode ? "Register now" : "Login now"}
            </span>
          </p>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Auth;
