import React from "react";
import "./App.css";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   NavLink
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Demo from "./components/Contact";
import NotFound from "./components/NotFound";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
   // console.log(activeOnlyWhenExact);
   return (
      <Route
         path={to}
         exact={activeOnlyWhenExact}
         children={({ match }) => {
            console.log(match);
            let active = match ? "active" : "";
            return (
               <li className={`nav-item ${active}`}>
                  <Link className="nav-link" to={to}>
                     {label}
                  </Link>
               </li>
            );
         }}
      />
   );
};

function App() {
   return (
      <Router>
         <div>
            {/* menu */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light  navbar-dark bg-dark">
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                     {/* <li className="nav-item"> */}
                     {/* <a className="nav-link" href="/">Home</a> */}
                     {/* <Link className="nav-link" to="/">Home</Link> */}
                     {/* <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink> */}
                     {/* <NavLink className="nav-link" to="/" activeClassName="active" exact>Home</NavLink> */}
                     <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
                     {/* </li> */}
                     {/* <li className="nav-item"> */}
                     {/* <a className="nav-link" href="/about">About</a> */}
                     {/* <Link  className="nav-link" to="/about">About</Link> */}
                     {/* <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink> */}
                     {/* <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink> */}
                     <MenuLink
                        label="About"
                        to="/about"
                        activeOnlyWhenExact={false}
                     />
                     {/* </li> */}
                     {/* <li className="nav-item"> */}
                     {/* <a className="nav-link" href="/contact">Contact</a> */}
                     {/* <Link className="nav-link" to="/contact">Contact</Link> */}
                     {/* <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink> */}
                     {/* <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink> */}
                     <MenuLink
                        label="Contact"
                        to="/contact"
                        activeOnlyWhenExact={false}
                     />
                     {/* </li> */}
                  </ul>
               </div>
            </nav>
            {/* content */}

            <Switch>
               <Route path="/" exact component={Home}></Route>
               <Route path="/about" exact component={About}></Route>
               <Route path="/contact" component={Demo}></Route>
               <Route path="*" exact={true} component={NotFound} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
