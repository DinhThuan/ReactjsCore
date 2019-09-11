import React from "react";
import "./App.css";

// using ES6 modules
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* menu */}
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
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <hr></hr>
        {/* content */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="*" exact={true} component={NotFound} /> */}
        <Route component={NoMatch} />
      </div>
    </Router>
  );
}

function NoMatch({ location }) {
  console.log(location);
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}