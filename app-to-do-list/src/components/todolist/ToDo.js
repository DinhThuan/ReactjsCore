import React from "react";
import TaskForm from "./task-form/TaskForm";
import ControlForm from "./control-form/ControlForm";
import TaskList from "./task-list/TaskList";
import { generateID } from "../../utils/RandomId";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem("tasks"))
      });
    }
  }
  componentDidMount() {
    // console.log(this.state.tasks);
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  };
  closeFormTask = value => {
    this.setState({
      isDisplayForm: value
    });
  };
  receiveData = data => {
    data["id"] = generateID();
    let arr = this.state.tasks;
    arr.push(data);
    this.setState({
      tasks: arr,
      isDisplayForm: false
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    // console.log(this.state.tasks);
  };
  handleData(data) {
    console.log(data);
    debugger;
  }
  onUpdateStatus = id => {
    let arr = [];
    this.state.tasks.forEach((task, index) => {
      if (task.id === id) {
        task.status = !task.status;
        arr.push(task);
      } else {
        arr.push(task);
      }
    });

    this.setState({
      tasks: arr
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  };

  deleteItemById = id => {
    console.log(id);
    let arr = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id !== id) {
        arr.push(this.state.tasks[i]);
      }
    }
    this.setState({
      tasks: arr
    });
    // console.log(arr);
    // localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem("tasks", JSON.stringify(arr));
  };

  render() { 
    let { tasks } = this.state; // var tasks = this.state.tasks
    return (
      <React.Fragment>
        <div className="row mt-5">
          <div className="col-md-4">
            {this.state.isDisplayForm && (
              <TaskForm
                onCloseForm={this.closeFormTask}
                receiveData={this.receiveData}
              ></TaskForm>
            )}
          </div>
          <div className={this.state.isDisplayForm ? "col-md-8" : "col-md-12"}>
            <div className="App">
              <div>
                <button
                  className="btn btn-primary btn-xs"
                  onClick={this.onToggleForm}
                >
                  <i className="fas fa-plus"></i> Add task
                </button>
              </div>
              <div className="row mt-3">
                <ControlForm></ControlForm>
              </div>
              <div className="row">
                <TaskList
                  tasks={tasks}
                  handleData={this.handleData}
                  onUpdateStatus={this.onUpdateStatus}
                  deleteItem={this.deleteItemById}
                ></TaskList>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
