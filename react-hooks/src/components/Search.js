import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alert-context";

export const Search = () => {
  const { show } = useContext(AlertContext);

  const onSubmit = (event) => {
    if (event.key === "Enter") {
      show("This is alert!");
    }
  };

  return (
    <div className="form-group">
      <input
        className="form-control"
        placeholder="Введите ник пользователья"
        type="text"
        onKeyPress={onSubmit}
      />
    </div>
  );
};
