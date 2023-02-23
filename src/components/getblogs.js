import React, { useState, useEffect, createContext } from "react";

const BlogsContext = createContext();
export const BlogsProvider = ({ children }) => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("https://fair-teal-chinchilla-tam.cyclic.app/getblogs", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setblogs(data);
      });
  }, []);
  return (
    <BlogsContext.Provider value={blogs}>{children}</BlogsContext.Provider>
  );
};
export default BlogsContext;
