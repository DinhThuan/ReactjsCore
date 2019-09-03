import React from 'react';

export default class TableTask extends React.Component {
   state = {

   };
   // constructor(props) {
   //    super(props);
   //    console.log(props);
   // }
   render() {
      return (
         <div className="col">
            <table className="table table-bordered table-sm border-primary">
               <thead>
                  <tr>
                     <th scope="col" width="50px">No.</th>
                     <th scope="col">Name</th>
                     <th scope="col" width="150px">Status</th>
                     <th scope="col" className="text-center" width="180px">Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td><span className="label label-info">Info</span></td>
                     <td className="text-center">
                        <button className="bn btn-warning btn-sm"><i className="far fa-edit"></i> Edit</button>
                        <button className="bn btn-danger ml-2 btn-sm"><i className="far fa-trash-alt"></i> Delete</button>
                     </td>
                  </tr>
                  <tr>
                     <th scope="row">2</th>
                     <td>Jacob</td>
                     <td><span className="label label-danger">Danger</span></td>
                     <td className="text-center">
                        <button className="bn btn-warning btn-sm"><i className="far fa-edit"></i> Edit</button>
                        <button className="bn btn-danger ml-2 btn-sm"><i className="far fa-trash-alt"></i> Delete</button>
                     </td>
                  </tr>
                  <tr>
                     <th scope="row">3</th>
                     <td>Larry the Bird</td>
                     <td><span className="label label-danger">Danger</span></td>
                     <td className="text-center">
                        <button className="bn btn-warning btn-sm"><i className="far fa-edit"></i> Edit</button>
                        <button className="bn btn-danger ml-2 btn-sm"><i className="far fa-trash-alt"></i> Delete</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

