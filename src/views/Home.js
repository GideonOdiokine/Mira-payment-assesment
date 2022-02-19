import React from "react";
import BlogLists from "../components/BlogLists";
import "./styles/Home.css";
import useFetch from "../customHook/useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => console.log("Great"));
  };


  return (
    <div className="home">
      {error && <h4>{error}</h4>}
      {loading && <h3>Loading....</h3>}
      {blogs && <BlogLists blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
