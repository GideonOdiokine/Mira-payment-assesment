import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog, handleDelete }) => {
  return (
    <div className="blog-preview flex">
      <div>
        <Link to={`/blogs/${blog.id}`}>
          <h2>{blog.title}</h2>
        </Link>

        <p>Written by {blog.author}</p>
      </div>
      <div className="del">
        <button onClick={() => handleDelete(blog.id)}>Delete</button>
      </div>
    </div>
  );
};

export default BlogItem;
