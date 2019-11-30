import React from "react";
import "./Car.scss";
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types';


class Car extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if(this.props.index ===1) {
      this.inputRef.current.focus();
    }
  }
  

  render() {
    const { name, year, onChangeName, onDelete } = this.props;
    const inputClasses = ["input"];

    if (name !== "") {
      inputClasses.push("green");
    } else {
      inputClasses.push("red");
    }

    if (name.length > 4) {
      inputClasses.push("bold");
    }

    return (
      <React.Fragment>
        <h3>Car name: {name}</h3>
        <p>
          Year: <strong>{year}</strong>
        </p>
        <input
          ref = {this.inputRef}
          type="text"
          onChange={onChangeName}
          value={name}
          className={inputClasses.join(" ")}
        />
        <button onClick={onDelete}>Delete</button>
      </React.Fragment>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
  index: PropTypes.number
}

export default withClass(Car, "Car");
