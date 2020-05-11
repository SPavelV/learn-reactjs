import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alert-context";

export const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    if (value.trim()) {
      console.log("Make reques with: ", value);
    } else {
      show("Введите данные пользователя");
    }
  };

  return (
    <div className="form-group">
      <input
        className="form-control"
        placeholder="Введите ник пользователья"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
