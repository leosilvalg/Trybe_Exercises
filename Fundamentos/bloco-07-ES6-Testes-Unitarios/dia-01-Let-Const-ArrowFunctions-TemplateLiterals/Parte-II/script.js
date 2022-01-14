// Crie uma função que receba um número e retorne seu fatorial.
// Forma progressiva
// const fatorial = (n) => {
//     let resultado = n;
//     for (let i = 1; i < n; i += 1) {
//         resultado *= i;
//     }
//     return resultado
// }
// console.log(fatorial(4));

// Regressiva

// const fatorial = (n) => {
//     let resultado = n;
//     for (let i = n - 1; i > 1; i--) {
//         resultado *= i;
//     }
//     return resultado
// }
// console.log(fatorial(4));

// Ternário

const fatorial = (n) => n > 1 ? n * fatorial(n - 1) : 1

console.log(fatorial(4));