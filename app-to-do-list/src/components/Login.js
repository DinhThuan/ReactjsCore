import React from "react";

export default class Login extends React.Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
   }
   render() {
      return (
         <React.Fragment>
            <div className="row">
               <div className="col-md-4"></div>
               <div
                  className="col-md-4 border border-success rounded mt-5"
                  style={{ padding: "50px" }}
               >
                  <form className="mt-5" onSubmit={this.handleSubmit}>
                     <div className="form-group">
                        <label>Email address</label>
                        <input
                           type="text"
                           className="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           style={{ border: "1px solid #28a745" }}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                           We'll never share your email with anyone else.
                        </small>
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input
                           type="password"
                           className="form-control"
                           id="exampleInputPassword1"
                           placeholder="Password"
                        />
                     </div>
                     <div className="form-group form-check">
                        <input
                           type="checkbox"
                           className="form-check-input"
                           id="exampleCheck1"
                        />
                        <label className="form-check-label">Check me out</label>
                     </div>
                     <button type="submit" className="btn btn-primary">
                        Submit
                     </button>
                  </form>
               </div>
               <div className="col-md-4"></div>
            </div>
         </React.Fragment>
      );
   }
}
