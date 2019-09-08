import React from "react";


export default class SortTable extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="col">
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Button group with nested dropdown"
                    >
                        <div className="btn-group" role="group">
                            <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn btn-secondary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort{" "}
                                <i className="far fa-caret-square-down ml-1"></i>
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="btnGroupDrop1"
                            >
                                <a
                                    className="dropdown-item"
                                    href="index.html"
                                >
                                    Name A-Z
                                    </a>
                                <a
                                    className="dropdown-item"
                                    href="index.html"
                                >
                                    Name Z-A
                                    </a>
                                <hr className="separates" />
                                <a
                                    className="dropdown-item"
                                    href="index.html"
                                >
                                    Status active
                                    </a>
                                <a
                                    className="dropdown-item"
                                    href="index.html"
                                >
                                    Status non Active
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
