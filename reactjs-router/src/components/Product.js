import React from "react";

class Product extends React.Component {
   render() {
      let { match } = this.props;
      // console.log(match);
      let name = match.params.slug;
      // console.log(name);
      return (
         <div>
            <h4>
               Detail Product component <b style={{color:'red'}}>{name}</b>
            </h4>
         </div>
      );
   }
}

export default Product;
