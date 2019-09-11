import React from "react";

export default class SearchTable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter keywords ..."
              aria-label="Recipient's username"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                <i className="fas fa-search"></i>{" "}
                <span className="ml-1">Search</span>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
