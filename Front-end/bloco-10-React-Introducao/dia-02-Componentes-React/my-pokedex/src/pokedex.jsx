import React from "react";
import Pokemon from './pokemon';
import pokemons from "./data";

class Pokedex extends React.Component {
  render() {
    return (
      <section className="flex flex-wrap mx-10 my-10 justify-center items-center">
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </section>
    );
  }
}



export default Pokedex;