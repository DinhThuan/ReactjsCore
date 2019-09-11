import React from "react";
import TaskItem from "./TaskItem";

export default class TaskList extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }
  // before render
  componentWillMount() {
   //  console.log("componentWillMount");
  }
  // after render
  componentDidMount() {
   //  console.log("componentDidMount");
  }
  render() {
    return (
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
                <input className="form-control"></input>
              </td>
              <td>
                <select className="form-control">
                  <option>1</option>
                  <option>1</option>
                </select>
              </td>
              <td className="text-center"></td>
            </tr>
            <TaskItem></TaskItem>
          </tbody>
        </table>
      </div>
    );
  }
}
