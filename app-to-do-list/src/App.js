import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import TableTask from "./components/task-list/TaskList";
import TaskForm from "./components/task-form/TaskForm";
import ControlForm from "./components/control-form/ControlForm";

export default class App extends React.Component {
   state = {
   };
   constructor(props) {
      super(props);
      this.myInput = React.createRef();
   }
   handleAddTask = () => {
      console.log("handle");
      this.setState({
      });
   };

   closeFormAddTask = () => {
      this.setState({
         showBtnAdd: false
      });
   };

   componentDidMount() {
      console.log("componentDidMount");
   }

   render() {
      return (
         <React.Fragment>
            <div>
               <Header></Header>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <TaskForm></TaskForm>
               </div>
               <div className="col-md-8">
                  <div className="App">
                     <div>
                        <button
                           className="btn btn-primary btn-xs"
                           onClick={this.handleAddTask}
                        >
                           <i className="fas fa-plus"></i> Add task
                        </button>
                     </div>
                     <div className="row mt-3">
                        <ControlForm></ControlForm>
                     </div>
                     <div className="row">
                        <TableTask></TableTask>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}
