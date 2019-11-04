import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Demo from "./components/Demo";

function App() {
   return (
      <Router>
         <div>
            {/* menu */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                     <li className="nav-item active">
                        <a className="nav-link">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link">About</a>
                     </li>
                  </ul>
               </div>
            </nav>
            {/* content */}

            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/about/1" component={Demo}></Route>
         </div>
      </Router>
   );
}

export default App;
