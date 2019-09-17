import React from "react";
import TaskItem from "./TaskItem";
import Popup from "../../Shared/Popup";

export default class TaskList extends React.Component {
  state = {
    id: ""
  };
  // constructor(props) {
  //   super(props);
  //   // console.log(this.props.data);
  // }
  // before render
  componentWillMount() {
    //  console.log("componentWillMount");
  }
  // after render
  componentDidMount() {
    //  console.log("componentDidMount");
  }
  getDataHandle(data) {
    console.log(data);
    // console.log(this.props.task);
    this.props.handleData2(data);
  }
  handleDeleteItem = id => {
    this.setState({
      id: id
    });
  };
  receiveId = text => {
    if (text === "yes") {
      this.props.deleteItem(this.state.id);
    }
    return;
  };
  render() {
    let { tasks } = this.props; // var tasks = this.props.tasks;
    let elmTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          handleData={this.getDataHandle}
          onUpdateStatus={this.props.onUpdateStatus}
          deleteItem={this.handleDeleteItem}
        ></TaskItem>
      );
    });
    return (
      <React.Fragment>
        <div className="col">
          <table className="table table-bordered table-sm border-primary">
            <thead>
              <tr>
                <th scope="col" width="50px">
                  No.
                </th>
                <th scope="col">Name</th>
                <th scope="col" width="150px">
                  Status
                </th>
                <th scope="col" className="text-center" width="180px">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>
                  <input className="input-xs form-control"></input>
                </td>
                <td>
                  <select className="input-sm form-control">
                    <option>1</option>
                    <option>1</option>
                  </select>
                </td>
                <td className="text-center"></td>
              </tr>
              {elmTasks}
            </tbody>
          </table>
          <Popup receiveId={this.receiveId}></Popup>
        </div>
      </React.Fragment>
    );
  }
}
