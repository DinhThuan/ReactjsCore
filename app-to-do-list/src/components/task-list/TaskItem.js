import React from 'react';

export default class TaskItem extends React.Component {
    state = {

    };
    // constructor(props) {
    //    super(props);
    //    console.log(props);
    // }
    render() {
        return (
            <React.Fragment>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td><span className="label label-info">Info</span></td>
                    <td className="text-center">
                        <button className="bn btn-warning btn-sm"><i className="far fa-edit"></i> Edit</button>
                        <button className="bn btn-danger ml-2 btn-sm"><i className="far fa-trash-alt"></i> Delete</button>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

