import React from "react";
import PropTypes from "prop-types";

export default class Demo extends React.Component {
  static defaultProps = {
    name: "stranger"
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    car: PropTypes.shape({
      registrationNumber: PropTypes.string,
      year: PropTypes.number
    }).isRequired,
    // updateCallBack: PropTypes.func.isRequired
  };
  componentWillMount() {
    console.log(this.props.name);
    console.log(this.props.car);
  }

  render() {
    return <h5>{this.props.name}</h5>;
  }
  componentDidMount() {
    console.log(this.props.name);
  }
}

// Demo.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number
// };
