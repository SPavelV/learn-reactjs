import React, { Component } from 'react';
import classes from './Quiz.module.css';
console.log(classes)

export default class Quiz extends Component {
  render() {
    return (
      <div>
        <div className={classes.Some}>
          <h1>Quiz</h1>
        </div>
      </div>
    )
  }
}
