import React from "react";

export default class Demo extends React.Component {
  static defaultProps = {
    name: "stranger"
  };
  render() {
    return <h5>{this.props.name}</h5>;
  }
}

// Demo.defaultProps = {
//   name: "Stranger"
// };
