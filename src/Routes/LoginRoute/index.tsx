import React, { useContext } from "react";
import LoginPage from "../../Components/LoginPage";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import { LoginPageStyle } from "./styleComponents";
import { NxtwatchContextType } from "../../ComponentsTypes";
export type LoginRouteStyle = {
  darkMode: boolean;
};

const LoginRoute = () => {
  const { isDarkMode } = useContext<NxtwatchContextType>(NxtwatchContext);
  return (
    <LoginPageStyle darkMode={isDarkMode}>
      <LoginPage />
    </LoginPageStyle>
  );
};

export default LoginRoute;
