import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  return (
    <div className="blog-details">
      <h3>BlogDetails {id}</h3>
      {loading && <div>Loading </div>}
      {error && <div>Error </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
