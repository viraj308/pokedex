import React, { useState } from "react";
import "./Inputform.css";
import logo from "../icons/pokeball.png";

export default function InputForm({ pokemonSet, pokemon_name }) {
  const [fieldValue, setFieldValue] = useState(pokemon_name);

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
        <input type="image" src={logo} alt="submit" width="33px" />
      </form>
    </div>
  );
}
