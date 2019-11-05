import React from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";

class Products extends React.Component {
   render() {
      const products = [
         {
            id: 1,
            slug: "product1",
            name: "product 1",
            price: 10000
         },
         {
            id: 2,
            slug: "product2",
            name: "product 2",
            price: 10000
         },
         {
            id: 3,
            slug: "product3",
            name: "product 3",
            price: 10000
         }
      ];
      let { match } = this.props;
      // console.log(match);
      let result = null;

      if (products.length > 0) {
         result = products.map((product, index) => {
            return (
               <NavLink to={`${match.url}/${product.slug}`} key={index}>
                  <li>
                     {product.name} - {product.price}
                  </li>
               </NavLink>
            );
         });
      }

      let { location } = this.props;
      console.log(location);

      return (
         <div>
            <div>
               <h4>Product component</h4>
               <ul>{result}</ul>
            </div>
            <div>
               <Route path="/products/:slug" component={Product}></Route>
            </div>
         </div>
      );
   }
}

export default Products;
