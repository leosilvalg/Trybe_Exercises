// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const arrayFinal = arrays.reduce((acc, val) => acc.concat(val), []);

console.log(arrayFinal);