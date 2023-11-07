import React, { useState, useEffect, createContext } from "react";

const BlogsContext = createContext();
export const BlogsProvider = ({ children }) => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch(
      "http://ec2-3-14-143-191.us-east-2.compute.amazonaws.com:3000/getblogs",
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    )
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
