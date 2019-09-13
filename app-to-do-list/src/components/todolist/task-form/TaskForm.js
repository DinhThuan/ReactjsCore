import React from "react";

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: 0
    };
  }
  componentWillMount() {
    this.setState({});
  }
  closeFormAddTask = () => {
    this.props.onCloseForm(false);
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.receiveData(this.state);
  };
  handleInputChange = event => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card border-success">
          <div className="card-header text-white bg-success">
            Add Task
            <i
              className="fas fa-times-circle float-right icon-close-header"
              onClick={this.closeFormAddTask}
            ></i>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={this.handleInputChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-control"
                  id="status"
                  name="status"
                  onChange={this.handleInputChange}
                  value={this.state.status}
                >
                  <option value={0}>Please choose</option>
                  <option value={false}>Hidden</option>
                  <option value={true}>Active</option>
                </select>
              </div>
              <div className="form-check"></div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-save"></i> Save
              </button>
              <button type="reset" className="btn btn-info ml-3">
                <i className="fas fa-sync-alt"></i> Cancel
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
