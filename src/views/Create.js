import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles/create.css";

const Create = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Gideon");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || body === "" || author === "") {
      alert("Please fill the form");
    } else {
      const newLog = {
        title,
        body,
        author,
      };
      await fetch("http://localhost:8000/blogs", {
        method: "POST",
        body: JSON.stringify(newLog),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTitle("");
      setBody("");
      setAuthor("Gideon");
      history.push("/");
    }
    //  // const res = await fetch(`/logs/${log.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(log),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Gideon">Gideon</option>
          <option value="Odiokine">Odiokine</option>
          <option value="Okon">Okon</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
