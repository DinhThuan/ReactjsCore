import React from 'react';
import { Modal } from 'antd';

export default class ModalAntd extends React.Component {

   state = { visible: false };

   showModal = () => {
      console.log(this.props.api, this.props.id);
      this.setState({
         visible: true,
      });
   };

   openPopup(){
      console.log('open childrent');
      this.showModal();
   }

   handleOk = e => {
      console.log(e);
      this.setState({
         visible: false,
      });
   };

   handleCancel = e => {
      console.log(e);
      this.setState({
         visible: false,
      });
   };

   render() {
      return (
         <div>
            <Modal
               title="Basic Modal"
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
            >
               <p>Some contents...</p>
               <p>Some contents...</p>
               <p>Some contents...</p>
            </Modal>
         </div>
      );
   }
}

