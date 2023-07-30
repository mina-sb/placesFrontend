import React, { useCallback, useEffect, useReducer, useState } from "react";
import "./Auth.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import img from "../../shared/assets/6369737.png";
import { useForm } from "../../shared/hooks/form-hook";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

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
    console.log(formState);
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
  const submut = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="auth-container">
      <img className="auth-img" src={img} />
      <h2 className="auth-container-title">
        {isLoginMode ? "Login" : "Sign Up"}
      </h2>
      <form onSubmit={submut}>
        {!isLoginMode ? (
          <Input
            type="text"
            id="name"
            placeholder="Name"
            onInput={inputHandler}
            validators={["REQUIRED", "MIN(5)"]}
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
      </form>
    </div>
  );
};

export default Auth;
