import React, { useState, createContext, useEffect } from "react";
import { useFetcher } from "react-router-dom";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isauth, setisauth] = useState(false);
  const checkToken = async () => {
    const token = localStorage.getItem("token");
    await fetch(
      "http://ec2-3-14-143-191.us-east-2.compute.amazonaws.com:8080/getmessages",
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Credentials": true,
          Accept: "application/json",
          "Content-Type": "application/json",
          token: `Bearer ${token}`,
        },
        mode: "cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setisauth(true);
          console.log(isauth);
        }
      });
  };
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isauth, setisauth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
