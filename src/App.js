import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Create from "./views/Create";
import BlogDetails from "./views/BlogDetails";
// import UpdateBlog from "./views/UpdateBlog";
import Edit from "./views/Edit";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/edit" render={(props) => <Edit {...props} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
