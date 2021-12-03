/*Exercicio 1*/
/*function verificaPalindrome(palavra) {
   let palindromo = palavra.split('').reverse().join('');
   return palavra === palindromo
}

console.log(verificaPalindrome("Trybe"));*/

/*Exercico 2*/
/*function listas(array) {
    //Definindo a variavel maior como sendo zero
    let maior = 0;


    for (let i in array) {
        if (array[maior] < array[i]) {
            maior = i;
        }
    }
    return maior;
}

console.log(listas([2, 3, 6, 7, 10, 1]));*/

/*Exercicio 3*/
/*function listas(array) {
    //Definindo a variavel maior como sendo zero
    let menor = 0;


    for (let i in array) {
        if (array[menor] > array[i]) {
            menor = i;
        }
    }
    return menor;
}

console.log(listas([2, 3, 6, 7, 10, 1]));*/

/*Exercico 4*/
/*function listas(array) {

    //Definindo o primeiro nome como sendo maior
    let maior = array[0];


    for (let i = 1; i < array.length; i += 1) {
        if (array[i].length > maior.length) {
            maior = array[i];
        }
    }
    return maior;
}

console.log(listas(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));*/

/*Exercico 5*/
/*function listas(array) {
    //Definindo a variavel como sendo zero
    let resul = 0;
    let repete = [];

    for (let i in array) {
        for(let j = 1; j < array.length; j +=1){
            if (array[i] == array[j]){
            resul = resul+1
            }
        }
       repete.push(resul)
    }
    return resul;
}

console.log(listas([2, 3, 2, 5, 8, 2, 3]))*/

/*Exercicio 6*/
/*function soma(numero){

    let resul = 0;

    for (let i = 1; i <= numero; i += 1) {
        resul += i;
        
    }
    return resul;
}

console.log(soma(10));*/

/*Exercicio 7*/
//Utilizando o Split

/*function verificaFinal(palavra, finalPalavra){
    let resul = true;
    palavra = palavra.split('');
    finalPalavra = finalPalavra.split('');

    for (let i = 0; i < finalPalavra.length; i += 1) {
        if (palavra[palavra.length - finalPalavra.length + i] != finalPalavra[i]) {
            resul = false;
        }        
    }
    return resul;
}

console.log(verificaFinal('Teste', 'be'));*/