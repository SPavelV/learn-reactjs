import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const  starWarsChars = [
  { name: "Люк Скайвокер", side: "light" },
  { name: "Йода", side: "light" },
  { name: "Обиван Кеноби", side: "light" },
  { name: "Палпатин", side: "dark" },
  { name: "Дарт Вэйдер", side: "dark" },
];

ReactDOM.render( <App list={starWarsChars} side="light"/>, document.getElementById("root"));
