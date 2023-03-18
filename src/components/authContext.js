import React, { useState, createContext, useLayoutEffect } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isauth, setisauth] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <AuthContext.Provider value={{ isauth, setisauth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
