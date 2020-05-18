import React from "react";
import "./App.scss";

const App = ({ list }) => (
  <div className={"App"}>
    <ul>
      {list.map((char, index) => {
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

const withFilteredProps = (Component) => ({ list, side }) => {
  const filteredList = list.filter((char) => char.side === side);

  return <Component list={filteredList} />;
};

const FilteredList = withFilteredProps(App)
export default FilteredList;
