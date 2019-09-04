import React from "react";
import Child from "./child";

export default class Parent extends React.Component {
  
  receiveData(data) {
    console.log(`receive parent to Child: ${data}`);
  }

  componentDidMount(){
      this.props.receiveChild('Parent');
  }

  render() {
    return (
      <React.Fragment>
        <h2>name: {this.props.name}</h2>
        <Child name="Parent" receiveChild={this.receiveData}></Child>
      </React.Fragment>
    );
  }
}
