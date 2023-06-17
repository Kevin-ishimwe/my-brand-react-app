import React, { useState, useEffect, createContext } from "react";

const BlogsContext = createContext();
export const BlogsProvider = ({ children }) => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("https://my-backend-portfolio.onrender.com/getblogs", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setblogs(data);
      });
  }, []);
  return (
    <BlogsContext.Provider value={blogs}>{children}</BlogsContext.Provider>
  );
};
export default BlogsContext;
