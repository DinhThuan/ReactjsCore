import React from "react";

export default class Reset extends React.Component {
    setReset() {
        this.props.onResetSetting();
    }
    render() {
        return (
            <button className="btn btn-primary mt-2" onClick={() => { this.setReset() }}>Reset</button>
        );
    }
}
