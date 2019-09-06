import React from "react";
import "./App.scss";
import Form from "./components/study-form/Form";
import ModalAntd from "./components/shared/ModalAntd";
import { Button } from "antd";
import Lifecycles from "./components/Lifecycles";

export default class App extends React.Component {
   getData = data => {
      console.log(data);
   };
   showPopup = () => {
      this.refs.child.openPopup();
   };
   componentWillMount() {
      console.log("componentWillMount");
   }
   componentDidMount() {
      console.log("componentDidMount");
   }
   componentWillUnmount() {
      console.log("componentWillUnmount");
   }
   render() {
      const title = "App component";
      return (
         <div className="App mt-3">
            <ul className="nav nav-tabs" id="myTab">
               <li className="nav-item">
                  <a
                     className="nav-link active"
                     id="home-tab"
                     data-toggle="tab"
                     href="#home"
                     role="tab"
                     aria-controls="home"
                     aria-selected="true"
                  >
                     Form
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     className="nav-link"
                     id="profile-tab"
                     data-toggle="tab"
                     href="#profile"
                     role="tab"
                     aria-controls="profile"
                     aria-selected="false"
                  >
                     Modal Ant Design
                  </a>
               </li>
               <li className="nav-item">
                  <a
                     className="nav-link"
                     id="contact-tab"
                     data-toggle="tab"
                     href="#contact"
                     role="tab"
                     aria-controls="contact"
                     aria-selected="false"
                  >
                     Lifecycles
                  </a>
               </li>
            </ul>
            <div className="tab-content" id="myTabContent">
               <div className="tab-pane fade show active" id="home">
                  <Form name={title} receive={this.getData}></Form>
               </div>
               <div className="tab-pane fade mt-3" id="profile">
                  <Button type="primary" onClick={this.showPopup}>
                     Open Modal
                  </Button>
                  <ModalAntd ref="child" api="history" id={10}></ModalAntd>
               </div>
               <div className="tab-pane fade" id="contact">
                  <Lifecycles></Lifecycles>
               </div>
            </div>
         </div>
      );
   }
}
