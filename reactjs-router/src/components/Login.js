import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         txtUsername: "",
         txtPassword: ""
      };
   }
   onChange = e => {
      let target = e.target;
      let name = target.name;
      let value = target.type === "checkbox" ? target.checked : target.value;
      this.setState({
         [name]: value
      });
   };
   onLogin = e => {
      e.preventDefault();
      let { txtUsername, txtPassword } = this.state;
      if (txtUsername === "admin" && txtPassword === "admin") {
         localStorage.setItem(
            "user",
            JSON.stringify({
               username: txtUsername,
               password: txtPassword
            })
         );
         // return <Redirect to="/products" />;
      }
   };
   render() {
      let { txtUsername, txtPassword } = this.state;
      let loggedInUser = localStorage.getItem("user");
      let { location } = this.props;
      if (loggedInUser) {
         return (
            <Redirect
               to={{
                  pathname: "/products",
                  state: {
                     from: location
                  }
               }}
            />
         );
      }
      return (
         <div>
            <div className="container">
               <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                     <form className="mt-5" onSubmit={this.onLogin}>
                        <div className="form-group">
                           <label>Username</label>
                           <input
                              type="text"
                              name="txtUsername"
                              className="form-control"
                              placeholder="Username"
                              value={txtUsername}
                              onChange={this.onChange}
                           />
                        </div>
                        <div className="form-group">
                           <label>Password</label>
                           <input
                              type="Password"
                              name="txtPassword"
                              className="form-control"
                              placeholder="Password"
                              value={txtPassword}
                              onChange={this.onChange}
                           />
                        </div>
                        <div className="form-group">
                           <button type="submit" className="btn btn-primary">
                              Login
                           </button>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-4"></div>
               </div>
            </div>
         </div>
      );
   }
}

export default Login;
