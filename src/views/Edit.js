import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles/create.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    const { title, body, author, id } = props.location.state.blog;
    this.state = { title, body, author, id };
  }

  handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/blogs/${this.state.id}`, {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <div className="create">
        <h2>Update a Blog</h2>
        <form onSubmit={this.handleUpdate.bind(this)}>
          <label>Blog title</label>
          <input
            name="title"
            type="text"
            onChange={(e) => this.setState({ title: e.target.value })}
            required
            value={this.state.title}
          />
          <label>Blog body</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={(e) => this.setState({ body: e.target.value })}
            required
          ></textarea>
          <label>Blog author</label>
          <select
            name="author"
            value={this.state.author}
            onChange={(e) => this.setState({ author: e.target.value })}
          >
            <option value="Gideon">Gideon</option>
            <option value="Odiokine">Odiokine</option>
            <option value="Okon">Okon</option>
          </select>
          <button>Update Blog</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Edit);
