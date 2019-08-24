import React from "react";
import "./App.css";
import Reset from "./components/Reset";
import Result from "./components/Result";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";

export default class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         color: 'red',
         fontSize: 15,
      };
   }

   onSetColor = (param) => {
      this.setState({
         color: param
      });
   }

   setResetSetting = () => {
      console.log('reset');
      this.setState({
         color: 'red',
         fontSize: 15,
      });
   }

   onSetSizeSetting = (value) => {
      let newFontSize = this.state.fontSize+value;
      if (newFontSize >= 8 && newFontSize <= 36) {
         this.setState({
            fontSize: newFontSize
         });
      }
   }

   render() {
      return (
         <React.Fragment>
            <div className="row mt-5">
               <div className="col-md-6">
                  <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
               </div>
               <div className="col-md-6">
                  <SizeSetting fontSize={this.state.fontSize} onReceiveSize={this.onSetSizeSetting}></SizeSetting>
                  <Reset onResetSetting={this.setResetSetting}></Reset>
               </div>
            </div>
            <div className="row">
               <Result color={this.state.color} fontSize={this.state.fontSize} />
            </div>
         </React.Fragment>
      );
   }
}
