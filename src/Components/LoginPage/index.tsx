import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { jwtToken } from "../../Constants/appConstants";
import {
  ErrorMessage,
  FormContainer,
  InputField,
  InputLabel,
  LoginButton,
  LoginFormConatiner,
  PasswordLabel,
  WebsiteImage,
} from "./styleComponents";

export type LoginPages = {
  darkMode: boolean;
};

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({
    showLoginError: false,
    loginErrorMsg: "",
  });

  const onLoginSuccess = (token: string) => {
    Cookies.set(jwtToken, token, { expires: 2, path: "/" });

    history.replace("/");
  };

  const onLoginFailure = (errorMsg: string) => {
    setLoginError({ showLoginError: true, loginErrorMsg: errorMsg });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    

    if (response.ok === true) {
      onLoginSuccess(data.jwt_token);
    } else {
      onLoginFailure(data.error_msg);
    }
  };
  const onShowPassword = () => {
    setShowpassword(!showPassword);
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (Cookies.get(jwtToken)) {
    return <Redirect to="/" />;
  }
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <LoginFormConatiner>
            <FormContainer onSubmit={submitForm} darkMode={isDarkMode}>
              <WebsiteImage
                src={
                  isDarkMode
                    ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                }
                alt="website logo"
              />
              <InputLabel darkMode={isDarkMode}>USERNAME</InputLabel>
              <InputField
                type="text"
                id="username"
                value={username}
                placeholder="Username"
                onChange={onChangeUsername}
                darkMode={isDarkMode}
              />
              <InputLabel darkMode={isDarkMode}>PASSWORD</InputLabel>
              <InputField
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Password"
                onChange={onChangePassword}
                darkMode={isDarkMode}
              />
              <div>
                <input type="checkbox" onChange={onShowPassword} />
                <PasswordLabel darkMode={isDarkMode}>
                  Show password
                </PasswordLabel>
              </div>
              <LoginButton type="submit">Login</LoginButton>
              {loginError.showLoginError && (
                <ErrorMessage className="login-error-msg">
                  *{loginError.loginErrorMsg}
                </ErrorMessage>
              )}
            </FormContainer>
          </LoginFormConatiner>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default LoginPage;
