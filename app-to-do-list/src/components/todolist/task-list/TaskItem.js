import React from "react";
import "./TaskItem.scss";
export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteByItem = this.deleteByItem.bind(this);
  }
  deleteByItem() {
    this.props.deleteItem(this.props.task.id);
    // console.log(this.props.task);
  }

  updateItem = () => {
    // console.log("update");
    // console.log(this.props.task);
    this.props.handleData(this.props.task);
  };
  onUpdateStatus = () => {
    // console.log(this.props.task.id);
    this.props.onUpdateStatus(this.props.task.id);
  };
  render() {
    let { task, index } = this.props;
    // console.log(this.props.task);
    return (
      <React.Fragment>
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{task.name}</td>
          <td>
            <span
              className={
                task.status
                  ? "label label-info label-status"
                  : "label label-danger label-status"
              }
              onClick={this.onUpdateStatus}
            >
              {task.status ? "active" : "hidden"}
            </span>
          </td>
          <td className="text-center">
            <button className="bn btn-warning btn-sm" onClick={this.updateItem}>
              <i className="far fa-edit"></i> Edit
            </button>
            <button
              className="bn btn-danger ml-2 btn-sm"
              data-toggle="modal"
              data-target="#exampleModalLong"
              onClick={this.deleteByItem}
              type="button"
            >
              <i className="far fa-trash-alt"></i> Delete
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
