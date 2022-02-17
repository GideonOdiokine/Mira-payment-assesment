import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import "./styles/Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure?")) {
      const newBlog = blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlog);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <h4>{error}</h4>}
      {Loading && <h3>Loading....</h3>}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
