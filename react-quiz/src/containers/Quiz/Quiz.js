import React, { Component } from "react";
import classes from "./Quiz.module.css";
console.log(classes);

export default class Quiz extends Component {
  render() {
    return (
      <div className={classes.Quiz}>
        <h1>Quiz</h1>
      </div>
    );
  }
}
