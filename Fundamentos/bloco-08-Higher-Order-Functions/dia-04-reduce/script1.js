// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const arrayFinal = arrays.reduce((acc, val) => acc.concat(val)); // O val vai ser o array da linha 3 na primeira iteração, depois o da 4 e depois o da 5.

console.log(arrayFinal);