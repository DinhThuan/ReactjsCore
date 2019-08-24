import React from "react";

export default class ColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        };
    }

    showColor = (color) => {
        return { 
            backgroundColor: color,
        }
    }

    setActiveColor(color){
        // console.log(color);
        this.props.onReceiveColor(color);
    }

    render() {
        const elementColor = this.state.colors.map((color, index) => {
            return <span className={this.props.color === color ? 'active span-color' : 'span-color'} key={index} style={this.showColor(color)} onClick={() => { this.setActiveColor(color) }}></span>
        });
        return (
            <div className="card border border-primary">
                <div className="card-header bg-primary text-white">
                    Color Picker
                </div>
                <div className="card-body">
                    {elementColor}
                </div>
            </div>
        );
    }
}
