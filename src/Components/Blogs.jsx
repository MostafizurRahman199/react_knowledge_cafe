import React, { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsData = () => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  return <div className="md:col-span-2 border-2 border-red-500">

    {
      blogs.map((blog)=><Blog key={blog.id} blog={blog}/>)
    }
  
  </div>;
}
