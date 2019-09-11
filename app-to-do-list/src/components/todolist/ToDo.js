import React from "react";
import TaskForm from "./task-form/TaskForm";
import ControlForm from "./control-form/ControlForm";
import TaskList from "./task-list/TaskList";

export default class ToDo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-md-4">
            <TaskForm></TaskForm>
          </div>
          <div className="col-md-8">
            <div className="App">
              <div>
                <button className="btn btn-primary btn-xs">
                  <i className="fas fa-plus"></i> Add task
                </button>
                <button className="btn btn-info btn-xs ml-2">
                  <i className="fas fa-plus"></i> Generate Data
                </button>
              </div>
              <div className="row mt-3">
                <ControlForm></ControlForm>
              </div>
              <div className="row">
                <TaskList></TaskList>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
