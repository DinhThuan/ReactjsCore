import React from "react";

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: -1
    };
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
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
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
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-control"
                  id="status"
                  name="status"
                  onChange={this.handleInputChange}
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
