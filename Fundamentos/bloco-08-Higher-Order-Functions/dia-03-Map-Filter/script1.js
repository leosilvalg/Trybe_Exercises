const books = require('./script')

// Adicione o código do exercício aqui:
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const novoArray = books.map((item) => `${item.name} - ${item.genre} - ${item.author.name}`);

console.log(novoArray);

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const objetos = books.map((book) => (
  {author: book.author.name,
   age: book.releaseYear - book.author.birthYear,
  }
)).sort((a, b) => a.age - b.age);

console.log(objetos);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fant = books.filter((item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica');

console.log(fant);

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const livrosVelhos = books.filter((item) => 2022 - 60 > item.releaseYear).sort((a, b) => a.releaseYear - b.releaseYear);

console.log(livrosVelhos);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fant = books.filter((item) => item.genre === 'Fantasia' || item.genre === 'Ficção Científica');

const autores = [];

fant.forEach((item) => autores.push(item.author.name));

console.log(autores.sort());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const livrosVelhos = books.filter((item) => 2022 - 60 > item.releaseYear).sort((a, b) => a.releaseYear - b.releaseYear)

const livros = [];

livrosVelhos.forEach((item) => livros.push(item.name));

console.log(livros.sort());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. Dica: cada inicial termina com um ponto.


const autor = books.filter((item) => item.author.name[1] === '.'
&& item.author.name[4] === '.'
&& item.author.name[7] === '.'
)[0].name;

console.log(autor);