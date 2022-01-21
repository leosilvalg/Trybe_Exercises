// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const mapeia = names.map((item) => {
  const separa = item.toLowerCase().split('');
  const soma = separa.reduce(((acc, curl) => curl === 'a' ? acc + 1 : acc), 0);
  return soma;
}).reduce((acc, curr) => acc + curr);

console.log(mapeia);

// function containsA() {
//   // escreva seu código aqui
// }