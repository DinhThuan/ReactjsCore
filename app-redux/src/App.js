import React from "react";
import "./App.css";
import AllPostContainer from "./containers/AllPostContainer";
import PostFormContainer from "./containers/PostFormContainer";

function App() {
  return (
    <div className="App">
      <PostFormContainer />
      <AllPostContainer />
    </div>
  );
}

export default App;
