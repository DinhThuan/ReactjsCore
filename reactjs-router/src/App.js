import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Demo from "./components/Contact";
// import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import routes from "./routes";

class App extends React.Component {
   showContentMenus = routes => {
      let result = null;
      if (routes.length > 0) {
         result = routes.map((route, index) => {
            // console.log(route.main);
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
               />
            );
         });
      }
      return result;
   };
   render() {
      return (
         <Router>
            <div>
               {/* menu */}
               <Menu></Menu>
               {/* content */}

               <Switch>
                  {/* <Route path="/" exact component={Home}></Route>
                  <Route path="/about" exact component={About}></Route>
                  <Route path="/contact" component={Demo}></Route>
                  <Route path="*" exact={true} component={NotFound} /> */}
                  {this.showContentMenus(routes)}
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
