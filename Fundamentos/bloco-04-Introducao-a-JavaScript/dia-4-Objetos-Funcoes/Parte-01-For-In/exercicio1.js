/* Exercicio 1*/

/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, " + info.personagem);*/

/* Exercicio 2*/
/*
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorrente = 'Sim'

console.log(info);*/

/*Exercício 3*/
/*
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

for(let index in info){
    console.log(index);
}*/

/*Exercicio 4*/
/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  for(let index in info){
    console.log(info[index]);
}*/

/*Exercicio 5*/
/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for(let index in info){
    

    if(info.recorrente === info2.recorrente && info[index] === 'Sim' && info2[index] === 'Sim'){
        console.log('Ambos recorrente');
    } else{ 

        console.log(info[index] + ' e ' + info2[index]);
    }    
}*/

/*Exercicio 6*/
/*let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

let primeiroLivro = leitor.livrosFavoritos;

console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' ' + "se chama " + leitor.livrosFavoritos[0].titulo + '.');*/

/*Exercios 7 e 8*/
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      },
);

console.log(leitor.nome + ' ' + "tem " + leitor.livrosFavoritos.length + ' ' + "livros favoritos.");



    