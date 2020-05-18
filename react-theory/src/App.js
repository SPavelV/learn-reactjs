import React from "react";
import "./App.scss";

const App = ({ list, side }) => {

  const filteredList = list.filter(char => char.side === side);
  return (
    <div className={"App"}>
      <ul>
        {filteredList.map((char, index) => {
          return (
            <li key={char.name + index}>
              <strong>{char.name}: </strong>
              {char.side}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
