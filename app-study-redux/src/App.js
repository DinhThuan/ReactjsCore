import React from "react";
import "./App.scss";
import Demo from "./components/Demo";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Demo
          name={"Thomas"}
          age={27}
          car={{ registrationNumber: "tony", year: 27 }}
        ></Demo>
      </div>
    );
  }
}
