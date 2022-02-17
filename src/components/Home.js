import React from "react";
import BlogList from "./BlogList";
import "./styles/Home.css";
import useFetch from "../customHook/useFetch";

const Home = () => {
  const {
    data: blogs,
    setData,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure?")) {
      const newBlog = blogs.filter((blog) => blog.id !== id);
      setData(newBlog);
    }
  };

  return (
    <div className="home">
      {error && <h4>{error}</h4>}
      {loading && <h3>Loading....</h3>}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
