import Card from "./components/Card";
import "./app.css";
import { useEffect, useState } from "react";

import axios from "axios";
import InputForm from "./components/InputForm";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [pokemon, setPokemon] = useState("charizard");
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        console.log(response.data);
        setPokemonData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemon]);

  if (loading) return "Loading...";
  return (
    <>
      <InputForm pokemonSet={setPokemon} pokemon_name={pokemon} />
      <ErrorBoundary>
        <Card dataPokemon={pokemonData} />
      </ErrorBoundary>
    </>
  );
}

export default App;
