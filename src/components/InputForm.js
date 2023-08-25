import React, { useState } from "react";

export default function InputForm({ pokemonSet }) {
  const [fieldValue, setFieldValue] = useState("charizard");

  const handleSubmit = (e) => {
    e.preventDefault();
    pokemonSet(fieldValue);
  };
  return (
    <div className="container">
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="pokemon-name">Enter the pokemon Name </label>
        <input
          type="text"
          id="pokemon-name"
          defaultValue="charizard"
          onChange={(e) => {
            setFieldValue(e.target.value);
          }}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
