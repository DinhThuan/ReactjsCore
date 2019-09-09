import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";

export default class App extends React.Component {

   render() {
      return (
         <Router>
            <React.Fragment>
               <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                  <ul class="navbar-nav">
                     <li class="nav-item">
                        <Link to="/"><a class="nav-link">Todo Lists</a></Link>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link">Link 2</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link">Link 3</a>
                     </li>
                  </ul>
               </nav>
               <Route exact path="/" component={Home} />
            </React.Fragment>
            
         </Router>

      );
   }
}
