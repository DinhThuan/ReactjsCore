import React from "react";

export default class TaskItem extends React.Component {
  state = {
    lists: []
  };
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    // console.log("componentDidMount");
    this.setState({
      lists: JSON.parse(localStorage.getItem("users"))
    });
  }
  componentWillMount() {
    let lists = [
      { id: 1, name: "A", status: "active" },
      { id: 2, name: "B", status: "inactive" },
      { id: 3, name: "C", status: "active" },
      { id: 4, name: "D", status: "active" },
      { id: 5, name: "E", status: "active" },
      { id: 5, name: "E", status: "active" },
      { id: 5, name: "E", status: "active" },
      { id: 5, name: "E", status: "active" },
    ];
    localStorage.setItem("users", JSON.stringify(lists));
    // console.log("componentWillMount");
  }
  render() {
    let element = this.state.lists.map((list, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{list.name}</td>
          <td>
            <span className="label label-info">{list.status}</span>
          </td>
          <td className="text-center">
            <button className="bn btn-warning btn-sm">
              <i className="far fa-edit"></i> Edit
            </button>
            <button className="bn btn-danger ml-2 btn-sm">
              <i className="far fa-trash-alt"></i> Delete
            </button>
          </td>
        </tr>
      );
    });
    return <React.Fragment>{element}</React.Fragment>;
  }
}

