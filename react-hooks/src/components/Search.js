import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alert-context";
import { GithubContext } from "../context/github/githubContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    if (value.trim()) {
      github.search(value.trim())
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
