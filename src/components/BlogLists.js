import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>All blogs</h2>
      {blogs?.map((blog) => (
        <BlogItem blog={blog} handleDelete={handleDelete} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
