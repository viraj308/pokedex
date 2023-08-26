import React, { useState } from "react";
import "./Inputform.css";

export default function InputForm({ pokemonSet }) {
  const [fieldValue, setFieldValue] = useState("charizard");

  const handleSubmit = (e) => {
    e.preventDefault();
    pokemonSet(fieldValue);
  };
  return (
    <div className="input-form">
      <form id="form" onSubmit={handleSubmit}>
        {/*  <label htmlFor="pokemon-name">Enter the pokemon Name </label> */}
        <input
          type="text"
          id="pokemon-name"
          className="pokemon-name"
          defaultValue={fieldValue}
          onChange={(e) => {
            setFieldValue(e.target.value);
          }}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
