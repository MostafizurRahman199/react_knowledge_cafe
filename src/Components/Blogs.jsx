import React, { useEffect, useState } from "react";

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

  return <div>Blogs</div>;
}
