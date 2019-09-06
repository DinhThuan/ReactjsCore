import React from 'react';

export default class Lifecycles extends React.Component {
   state = { count: 0 };
   decrease = () => {
      this.setState({
         count: this.state.count - 1
      })
   }
   increase() {
      this.setState({
         count: this.state.count + 1
      })
   }
   reset() {
      this.setState({
         count: 0
      })
   }
   /** Được gọi 1 lần duy nhất. */
   componentDidMount() {
      // console.log('componentDidMount');
   }
   /** Duoc goi ngay rau khi render duoc goi, nhung khong duoc goi lan dau tien. */
   componentDidUpdate() {
      // console.log('componentDidUpdate');
   }
   /** Duoc goi truoc khi no unMount, destroy component, sau nay dung de giai phong bo nho */
   componentWillUnmount() {
      // console.log('componentWillUnmount');
   }
   render() {
      return (
         <div>
            <button onClick={this.decrease}>decrease</button>
            <label>{this.state.count}</label>
            <button onClick={this.increase.bind(this)}>increase</button>
            <button onClick={() => { this.reset() }}>reset</button>
         </div>
      );
   }
}

