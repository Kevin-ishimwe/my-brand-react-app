import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "./components/authContext";

const ProtectedRoute = ({ children }) => {
  const { isauth } = useContext(AuthContext);
  console.log(isauth);
  if (isauth === true) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
