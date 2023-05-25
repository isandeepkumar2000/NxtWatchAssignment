import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";
import React from "react";
import { jwtToken } from "./Constants/appConstants";

const ProtectedRoute = (props: any) => {
  const token = Cookie.get(jwtToken);
  if (token === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
