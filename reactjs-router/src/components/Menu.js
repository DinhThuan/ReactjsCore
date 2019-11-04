import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
   {
      name: "Home",
      to: "/",
      exact: true
   },
   {
      name: "About",
      to: "/about",
      exact: false
   },
   {
      name: "Contact",
      to: "/contact",
      exact: false
   }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
   // console.log(activeOnlyWhenExact);
   return (
      <Route
         path={to}
         exact={activeOnlyWhenExact}
         children={({ match }) => {
            // console.log(match);
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

class Menu extends React.Component {
   showMenu = menus => {
      // console.log(menus);
      let result = null;
      if (menus.length > 0) {
         result = menus.map((menu, index) => {
            return (
               <MenuLink
                  key={index}
                  label={menu.name}
                  to={menu.to}
                  activeOnlyWhenExact={menu.exact}
               />
            );
         });
      }
      return result;
   };
   render() {
      return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light  navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  {/* <li className="nav-item"> */}
                  {/* <a className="nav-link" href="/">Home</a> */}
                  {/* <Link className="nav-link" to="/">Home</Link> */}
                  {/* <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink> */}
                  {/* <NavLink className="nav-link" to="/" activeClassName="active" exact>Home</NavLink> */}
                  {/* <MenuLink label="Home" to="/" activeOnlyWhenExact={true} /> */}
                  {/* </li> */}
                  {/* <li className="nav-item"> */}
                  {/* <a className="nav-link" href="/about">About</a> */}
                  {/* <Link  className="nav-link" to="/about">About</Link> */}
                  {/* <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink> */}
                  {/* <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink> */}
                  {/* <MenuLink label="About" to="/about" activeOnlyWhenExact={false}/> */}
                  {/* </li> */}
                  {/* <li className="nav-item"> */}
                  {/* <a className="nav-link" href="/contact">Contact</a> */}
                  {/* <Link className="nav-link" to="/contact">Contact</Link> */}
                  {/* <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink> */}
                  {/* <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink> */}
                  {/* <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={false} /> */}
                  {/* </li> */}
                  {this.showMenu(menus)}
               </ul>
            </div>
         </nav>
      );
   }
}

export default Menu;
