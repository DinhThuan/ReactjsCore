import React from "react";
import "./Popup.scss";
export default class Popup extends React.Component {
  noAction = () => {
    console.log("no");
  };
  yesAction = () => {
    console.log("yes");
    console.log(this.props);
    this.props.receiveId('yes');
  };
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
                <b>Are you sure you want to delete?</b>
                <br></br>
                <i> This operation is not refundable</i>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.noAction}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-xs"
                  data-dismiss="modal"
                  onClick={this.yesAction}
                >
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
