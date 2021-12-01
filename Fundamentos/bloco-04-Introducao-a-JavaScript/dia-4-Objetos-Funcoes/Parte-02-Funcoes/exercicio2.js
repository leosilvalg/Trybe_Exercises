/*Exercicio 1*/
/*function verificaPalindrome(palavra) {
   let palindromo = palavra.split('').reverse().join('');
   return palavra === palindromo
}

console.log(verificaPalindrome("Trybe"));*/

/*Exercico 2*/
function listas(array) {
    //Definindo a variavel maior como sendo zero
    let maior = 0;

    
    for (let i in array) {
        if (array[maior] < array[i]) {
            maior = i;
        }
    }
    return maior;
}

console.log(listas([2, 3, 6, 7, 10, 1]));