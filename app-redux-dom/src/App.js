import React from "react";
import "./App.css";

// using ES6 modules
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <hr></hr>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </div>
    </Router>
  );
}
