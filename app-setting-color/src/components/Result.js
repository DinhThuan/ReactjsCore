import React from "react";

export default class Result extends React.Component {
    setStyle() {
        return {
            color: this.props.color,
            fontSize: this.props.fontSize + 'px',
            border: '1px solid ' + this.props.color
        }
    }
    render() {

        return (
            <div className="col-md-12">
                <p className="mt-4">Color: {this.props.color} - FontSize: {this.props.fontSize}px</p>
                <p className="p-content" style={this.setStyle()}>Content Setting</p>
            </div>
        );
    }
}
