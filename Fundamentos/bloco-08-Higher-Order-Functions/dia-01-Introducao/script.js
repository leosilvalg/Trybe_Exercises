// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// const newEmployees = (cb) => {
//   const employees = {
//     id1: cb('Pedro Guerra'),
//     id2: cb('Luiza Drumond'), 
//     id3: cb('Carla Paiva'), 
//   };
//   return employees;
// };

// const cb = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com`};
// };

// console.log(newEmployees(cb));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// const check = (myNumber, number) => myNumber === number;

// const resultado = (myNumber, check) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return check(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(resultado(3, check));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contarPontos = (rightAnswer, studentAnswer) => {
  let contador = 0;
  for (let index = 0; index < right.length; index += 1) {
    if (rightAnswer[index] === studentAnswer[index]) {
      contador += 1;
    } else if (studentAnswer[index] === 'N.A') {
      contador += 0;
    } else {
    contador -= 0.5;
    }
  }
  return contador;
}

const score = (right, student, contarPontos) => contarPontos(right, student);

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, contarPontos));
