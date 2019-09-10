import React from "react";
import TaskList from "./components/task-list/TaskList";
import TaskForm from "./components/task-form/TaskForm";
import ControlForm from "./components/control-form/ControlForm";
import Home from "./components/Home";

export default class Home extends React.Component {
   state = {
      tasks:[]
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

   generateData = () => {
      console.log('generate');
      this.setState({
         tasks:[
            {id:1, name:'name',status:'active'},
            {id:1, name:'name',status:'active'},
         ]
      });
      setTimeout(() => {
         console.log(this.state.tasks);
      }, 100);
      
   }

   render() {
      return (
         <React.Fragment>
            <div>
               <Home></Home>
            </div>
            <div>
               {/* <Header></Header> */}
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
                        <button
                           className="btn btn-info btn-xs ml-2"
                           onClick={this.generateData}
                        >
                           <i className="fas fa-plus"></i> Generate Data
                        </button>
                     </div>
                     <div className="row mt-3">
                        <ControlForm></ControlForm>
                     </div>
                     <div className="row">
                        <TaskList data={this.state.tasks}></TaskList>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}
