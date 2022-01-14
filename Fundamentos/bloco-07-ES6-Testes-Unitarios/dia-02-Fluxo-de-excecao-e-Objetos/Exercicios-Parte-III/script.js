const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/

// const novaChave = (obj, key, value) => {
//     obj[key] = value;
// }
// novaChave(lesson2, 'turno', 'noite');
// console.log(lesson2);

/*Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.*/

// const keys = (obj) => Object.keys(obj);
// console.log(keys(lesson3))

/*Crie uma função para mostrar o tamanho de um objeto.*/

// const tamanho = (obj) => Object.keys(obj).length;
// console.log(tamanho(lesson3));

/*Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/

// const valor = (obj) => Object.values(obj);
// console.log(valor(lesson3));

/*Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons)*/
 
// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

/*Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.*/
// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// const estudantes = (obj) => {
//     let total = 0;
//     const teste = Object.keys(obj);
//     for(i in teste) {
//         total += obj[teste[i]].numeroEstudantes;
//     }
//     return total;
// }
// console.log(estudantes(allLessons));

/*Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. */

// const valor = (obj, number) => Object.values(obj)[number];
// console.log(valor(lesson1, 0));

/*Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.*/

const verifica = (obj, key, value) => obj[key] === value;

console.log(verifica(lesson3, 'materia', 'Matemática'));