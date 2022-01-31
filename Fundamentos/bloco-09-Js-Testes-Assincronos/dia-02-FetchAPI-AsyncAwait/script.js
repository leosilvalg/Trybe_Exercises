const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  const response = await fetch(API_URL, myObject);
  const data = await response.json();
  jokeContainer.innerHTML = data.joke;
};

fetchJoke()
  .catch((error) => console.error(error));

window.onload = () => fetchJoke();