import React from "react";
import "./card.css";

function Stats({ stat_1, stat_2 }) {
  if (stat_1 && stat_2) {
    return (
      <p className="stats">
        {"("}
        {stat_1.type.name} and {stat_2.type.name}
        {")"}
      </p>
    );
  } else {
    return (
      <p className="stats">
        {"("}
        {stat_1.type.name}
        {")"}
      </p>
    );
  }
}

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
          <h2 className="card-heading">
            {dataPokemon.name}

            <Stats
              stat_1={dataPokemon.types[0]}
              stat_2={dataPokemon.types[1]}
            />
          </h2>
          <div className="card-stats">
            <div className="row">
              <p>Height: {dataPokemon.height}</p>
              <p>Base Experience: {dataPokemon.base_experience}</p>
              <p>Weight: {dataPokemon.weight}</p>
            </div>
            <table>
              <tbody>
                <tr>
                  <th className="heading-1">
                    {dataPokemon.stats[0].stat.name}
                  </th>
                  <th>{dataPokemon.stats[1].stat.name}</th>
                  <th>{dataPokemon.stats[2].stat.name}</th>
                  <th>{dataPokemon.stats[3].stat.name}</th>
                  <th>{dataPokemon.stats[4].stat.name}</th>
                </tr>
                <tr>
                  <td>{dataPokemon.stats[0].base_stat}</td>
                  <td>{dataPokemon.stats[1].base_stat}</td>
                  <td>{dataPokemon.stats[2].base_stat}</td>
                  <td>{dataPokemon.stats[3].base_stat}</td>
                  <td>{dataPokemon.stats[4].base_stat}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
