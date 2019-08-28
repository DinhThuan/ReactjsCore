import React from 'react';
import './App.scss';
import Header from './components/Header';
import TableTask from './components/TableTask';

export default class App extends React.Component {
   state = {
      showAdd: false
   };
   constructor(props) {
      super(props);
      console.log(props);
   }
   handleAddTask = () => {
      console.log('handle');
      this.setState({
         showAdd: !this.state.showAdd
      });
   }

   closeFormAddTask = () => {
      this.setState({
         showAdd: false
      });
   }

   render() {
      return (
         <React.Fragment>
            <div>
               <Header></Header>
            </div>
            <div className="row">
               <div className="col-md-4">
                  {this.state.showAdd &&
                     <div className="card border-success">
                        <div className="card-header text-white bg-success">
                           Add Task <i className="fas fa-times-circle float-right icon-close-header" onClick={this.closeFormAddTask}></i>
                        </div>
                        <div className="card-body">
                           <form>
                              <div className="form-group">
                                 <label>Name</label>
                                 <input type="text" className="form-control" id="email" placeholder="Enter email" />
                              </div>
                              <div className="form-group">
                                 <label>Status</label>
                                 <select type="password" className="form-control" id="status" placeholder="Password">
                                    <option>Hidden</option>
                                    <option>Active</option>
                                 </select>
                              </div>
                              <div className="form-check">
                              </div>
                              <button type="submit" className="btn btn-primary"><i className="fas fa-save"></i> Save</button>
                              <button type="submit" className="btn btn-info ml-3"><i className="fas fa-sync-alt"></i> Cancel</button>
                           </form>
                        </div>
                     </div>
                  }
               </div>
               <div className={this.state.showAdd ? 'col-md-8' : 'col-md-12'}>
                  <div className="App">
                     <div>
                        <button className="btn btn-primary btn-xs" onClick={this.handleAddTask}>
                           <i className="fas fa-plus"></i> Add task
                        </button>
                     </div>
                     <div className="row mt-3">
                        <div className="col">
                           <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder="Enter keywords ..." aria-label="Recipient's username" />
                              <div className="input-group-append">
                                 <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i> <span className="ml-1">Search</span></span>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                              <div className="btn-group" role="group">
                                 <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sort <i className="far fa-caret-square-down ml-1"></i>
                                 </button>
                                 <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="index.html">Name A-Z</a>
                                    <a className="dropdown-item" href="index.html">Name Z-A</a>
                                    <hr className="separates" />
                                    <a className="dropdown-item" href="index.html">Status active</a>
                                    <a className="dropdown-item" href="index.html">Status non Active</a>
                                 </div>
                              </div>
                           </div>
                        </div>
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

