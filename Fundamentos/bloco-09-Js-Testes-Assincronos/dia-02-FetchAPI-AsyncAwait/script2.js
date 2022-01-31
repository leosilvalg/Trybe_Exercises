const lista = document.querySelector('#moedas');

const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());
    
    return coins;
}

const listaMoedas = async () => {
    const coins = await fetchCoins();
    coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((moeda) => {
        const newLi = document.createElement('li');
        const usdPreco = Number(moeda.priceUsd);

        newLi.innerText = `${moeda.name} (${moeda.symbol}): ${usdPreco.toFixed(2)}`;

        lista.appendChild(newLi);
    });
}

window.onload = () => listaMoedas();
