import React from "react";
import Pokemon from './pokemon';
import pokemons from "./data";


class Pokedex extends React.Component {
  constructor() {
    super();


    this.state = {
      name: '',
      pokemons,
    };

    this.filterByname = this.filterByname.bind(this);

  }

  filterByname(event) {
    this.setState(
      { name: event.target.value },
      () => this.setState((prevState) => ({
        pokemons: pokemons.filter((p) => p.name.toLowerCase().includes(prevState.name))
      })),
    );
  }

  render() {
    const { name, pokemons } = this.state 

    console.log(name);

    return (
      <div className="pokedex flex flex-wrap mx-10 my-10 justify-center items-center">
        <input type="text" placeholder="Digite o nome do pokemon" value={ name } onInput={ this.filterByname } />
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    );
  }
}



export default Pokedex;