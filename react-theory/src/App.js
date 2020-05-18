import React, { Component } from "react";
import "./App.scss";

export default class App extends Component {
  state = {
    starWarsChars: [
      { name: "Люк Скайвокер", side: "light" },
      { name: "Йода", side: "light" },
      { name: "Обиван Кеноби", side: "light" },
      { name: "Палпатин", side: "dark" },
      { name: "Дарт Вэйдер", side: "dark" },
    ],
  };

  render() {
    return <div className={"App"}>
      <ul>
        {this.state.starWarsChars.map((char,index) => {
          return (
            <li key={char.name + index}>
              <strong>{char.name}: </strong>
              {char.side}
            </li>
          )
        })}
      </ul>
    </div>;
  }
}
