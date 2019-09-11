import React from "react";

export default class TaskForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card border-success">
          <div className="card-header text-white bg-success">
            Add Task{" "}
            <i
              className="fas fa-times-circle float-right icon-close-header"
              onClick={this.closeFormAddTask}
            ></i>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  type="password"
                  className="form-control"
                  id="status"
                  placeholder="Password"
                >
                  <option>Hidden</option>
                  <option>Active</option>
                </select>
              </div>
              <div className="form-check"></div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-save"></i> Save
              </button>
              <button type="submit" className="btn btn-info ml-3">
                <i className="fas fa-sync-alt"></i> Cancel
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
