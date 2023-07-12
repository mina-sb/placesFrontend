import React, { useState } from "react";
import "./Auth.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
const img = require("../../shared/assets/6369737.png");

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <img className="auth-img" src={img} />
      <h2 className="auth-container-title">{isLogin ? "Login" : "Sign Up"}</h2>
      {!isLogin ? <Input type="text" id="name" placeholder="Name" /> : ""}
      <Input type="text" id="email" placeholder="Email" />
      <Input type="text" id="password" placeholder="Password" />
      <Button class="full-width-button main-color-button">
        {isLogin ? "Login" : "Join Now"}
      </Button>
      <Button class="bg-color-button full-width-button">
        <p className="link-to-signup-p">
          Don’t have an account?
          <span
            className="main-color-text"
            onClick={() => {
              setIsLogin((preMode) => !preMode);
            }}
          >
            Register now
          </span>
        </p>
      </Button>
    </div>
  );
};

export default Auth;
