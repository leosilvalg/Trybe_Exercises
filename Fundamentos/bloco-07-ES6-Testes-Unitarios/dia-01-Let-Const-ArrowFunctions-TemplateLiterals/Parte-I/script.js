/* Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function.
Modifique as concatenações para template literals */

/*const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(false);*/

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens[0] = 2;
oddsAndEvens[1] = 3;
oddsAndEvens[2] = 4;
oddsAndEvens[3] = 7;
oddsAndEvens[4] = 10;
oddsAndEvens[5] = 13;

console.log(`${oddsAndEvens} Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉