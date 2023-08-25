import React from "react";
import "./card.css";

export default function Card({ dataPokemon }) {
  return (
    <div className="card">
      <div className="container">
        <div className="image-wrapper">
          <img
            src={dataPokemon.sprites.other.home.front_default}
            className="image"
          />
        </div>
        <div className="card-text">
          <h2 className="card-heading">{dataPokemon.name}</h2>
          <div className="card-stats">
            <div className="row">
              <p>Height: {dataPokemon.height}</p>
              <p>Base Experience: {dataPokemon.base_experience}</p>
              <p>Type: {dataPokemon.types[0].type.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
