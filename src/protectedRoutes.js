import React, { useContext } from "react";
import {Navigate } from "react-router-dom";
import AuthContext from "./components/authContext";

const ProtectedRoute = ({ children }) => {
  const { isauth } = useContext(AuthContext);
  
  if (isauth === true) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
