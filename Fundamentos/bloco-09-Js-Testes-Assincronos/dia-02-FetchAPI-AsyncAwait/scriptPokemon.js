function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);

}


// PArte 1 - Usando fetch API

// function fetchPokemon(pokemon) {
//   const promise = (fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)); // Retorna uma promise

//   promise.then((response) => {
//     const promiseJson = response.json(); // Retorna uma promise

//     promiseJson.then((data) => {
//       // console.log(data);
//       const pokemon = {
//         name: data.name,
//         imageUrl: data.sprites.front_default
//       }
//       // console.log(pokemon);
//       append(pokemon);
//     })
//   })
// }

// Parte 2 - Refatrorando

// function fetchPokemon(pokemon) {

//  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // Retorna uma promise
//   .then((response) => response.json()) // Retorna uma promise
//   .then((data) => {
//     const pokemon = {
//       name: data.name,
//       imageUrl: data.sprites.front_default
//     }
//     append(pokemon);
//   })
//   .catch((error) => console.log(error));
// }

// function requestPokemons() {
//   fetchPokemon('charmander'),
//   fetchPokemon('charmander'),
//   fetchPokemon('charmander'),
//   fetchPokemon('charmander'),
//   fetchPokemon('charmander')
// }

// PArte 3 - Refatorando

// function extractNameImage(data) {
//   return {
//     name: data.name,
//     imageUrl: data.sprites.front_default
//   }
// }

// function fetchPokemon(pokemon) {

//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // Retorna uma promise
//    .then((response) => response.json()) // Retorna uma promise
//    .then((data) => {
//      const pokemon = extractNameImage(data)
//      append(pokemon);
//    })
//    .catch((error) => console.log(error));
//  }
 
//  function requestPokemons() {
//    fetchPokemon('charmander'),
//    fetchPokemon('charmander'),
//    fetchPokemon('charmander'),
//    fetchPokemon('charmander'),
//    fetchPokemon('charmander')
//  }

// Parte 4 - Colocando os objetos em ordem

// function fetchPokemonData(pokemon) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // Retorna uma promise
//     .then((response) => response.json()) // Retorna uma promise
// }

// function extractNameImage(data) {
//   return {
//     name: data.name,
//     imageUrl: data.sprites.front_default
//   }
// }
 
// function requestOrderedPokemons() {
//   Promise.all([
//    fetchPokemonData('bulbasaur'),
//    fetchPokemonData('charmander'),
//    fetchPokemonData('ditto'),
//    fetchPokemonData('pikachu'),
//    fetchPokemonData('squirtle')
//   ])
  
//   .then((pokemonDataList) => { // PokemonDataList retorna um array com os .JSON
//     // console.log(pokemonDataList);
//     const poke =  pokemonDataList.map((pokemonData) => extractNameImage(pokemonData))
//     poke.forEach((pokemon) => {
//       append(pokemon)
//     })
//   })
// }

// Parte 5 - Refatorando com async/await
function fetchPokemonData(pokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // Retorna uma promise
    .then((response) => response.json()) // Retorna uma promise
}

function extractNameImage(data) {
  return {
    name: data.name,
    imageUrl: data.sprites.front_default
  }
}
 
async function requestOrderedPokemons() {
  try {
   const pokemonDataList = await Promise.all([
      fetchPokemonData('bulbasaur'),
      fetchPokemonData('charmander'),
      fetchPokemonData('ditto'),
      fetchPokemonData('pikachu'),
      fetchPokemonData('squirtle')
    ])

    const pokemonList = pokemonDataList.map((pokemonData) => {
      return extractNameImage(pokemonData);
    })

    pokemonList.forEach((pokemon) => {
      append(pokemon)
    })    
  } catch(error) {
    console.log(error)
  }
}

window.onload = requestOrderedPokemons;