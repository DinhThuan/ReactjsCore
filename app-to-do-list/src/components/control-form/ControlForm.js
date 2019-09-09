import React from "react";
import SearchTable from "./search-table/SearchTable";
import SortTable from "./sort-table/SortTable";


export default class ControlForm extends React.Component {

    render() {
        return (
            <React.Fragment>
                <SearchTable></SearchTable>
                <SortTable></SortTable>
            </React.Fragment>
        );
    }
}
