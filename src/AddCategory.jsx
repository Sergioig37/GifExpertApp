import React from "react";
import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) =>{
    console.log(inputValue);
    //Al hacer el submit recarga la página enter, para que no pase esto hay que evitarlo
    event.preventDefault();
    onAddCategory(inputValue);
    setInputValue("");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Buscador gifs"
          onChange={onChangeInput}
        ></input>
      </form>
    </>
  );
};
