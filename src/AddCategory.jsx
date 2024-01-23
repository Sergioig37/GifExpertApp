import React from "react";
import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = () =>{
    console.log(inputValue);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscador gifs"
          onChange={onChangeInput}
        ></input>
      </form>
    </>
  );
};
