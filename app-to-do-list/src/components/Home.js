import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="www">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="www">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="www">
                Features
              </a>
              <a className="nav-item nav-link" href="www">
                Pricing
              </a>
              <a
                className="nav-item nav-link disabled"
                href="www"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
