import React from "react";

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    // console.log(this.props.history.push("about"));
  }
  render() {
    return (
      <div>
        <h1>Not Found component</h1>
      </div>
    );
  }
}
