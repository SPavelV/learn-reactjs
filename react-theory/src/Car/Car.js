import React from "react";
import classes from "./Car.scss";
import withClass from "../hoc/withClass";

class Car extends React.Component {
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

export default withClass(Car, classes.Car);
