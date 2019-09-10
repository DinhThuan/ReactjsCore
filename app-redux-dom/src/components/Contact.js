import React from "react";

export default class Contact extends React.Component {
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
        <h4>Contact component</h4>
      </div>
    );
  }
}
