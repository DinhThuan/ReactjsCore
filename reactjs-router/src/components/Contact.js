import React from "react";
import { Prompt } from "react-router-dom";
class Contact extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isChecked: false
      };
   }
   onClick = isCheck => {
      this.setState({
         isChecked: isCheck
      });
      console.log(this.state.isChecked);
   };
   render() {
      let { isChecked } = this.state;
      return (
         <div>
            <h4>Contact component</h4>
            <button
               type="button"
               name=""
               id=""
               className="btn btn-primary"
               onClick={() => this.onClick(false)}
            >
               Allow
            </button>{" "}
            <button
               type="button"
               name=""
               id=""
               className="btn btn-info"
               onClick={() => this.onClick(true)}
            >
               Not Allow
            </button>
            <div>
               <Prompt
                  when={isChecked}
                  message={location =>
                     `Would you like to go to ${location.pathname}`
                  }
               />
            </div>
         </div>
      );
   }
}

export default Contact;
