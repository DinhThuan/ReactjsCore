import React from "react";

export default class Child extends React.Component {
  componentDidMount() {
    this.props.receiveChild("child");
  }
  render() {
    return <h3>{this.props.name}</h3>;
  }
}
