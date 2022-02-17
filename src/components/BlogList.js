import React from "react";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>All blogs</h2>
      {blogs?.map((blog) => (
        <div className="blog-preview flex" key={blog.id}>
          <div>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
          <div className="del">
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
