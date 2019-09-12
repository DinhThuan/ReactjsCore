import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ToDo from "./components/todolist/ToDo";
import Login from "./components/Login";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/to-do-list">
                To do list
              </Link>
            </li>
            <li className="nav-item float-right">
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/to-do-list" component={ToDo} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </div>
      </Router>
    );
  }
}

function NoMatch({ location }) {
  // console.log({ location });
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
