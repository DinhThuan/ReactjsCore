import React from "react";

export default class Popup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="exampleModalLong"
          role="dialog"
          aria-labelledby="confirmModal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <b>Are you sure delete this task?</b>
                <br></br>
                <i> Some descriptions</i>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="btn btn-danger btn-xs">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
