import React from "react";

export default class SizeSetting extends React.Component {

    changeSize = (value) => {
        console.log(value);
        this.props.onReceiveSize(value);
    }

    render() {
        return (
            <div className="card border border-warning">
                <div className="card-header bg-warning">
                    Size : {this.props.fontSize} px
                </div>
                <div className="card-body">
                    <button className="btn btn-xs btn-success" onClick={() => { this.changeSize(1) }}>
                        Increase
                    </button>
                    <button className="btn btn-xs btn-success ml-2" onClick={() => { this.changeSize(-1) }}>
                        Reduced
                    </button>
                </div>
            </div>
        );
    }
}
