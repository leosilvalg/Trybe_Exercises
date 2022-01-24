// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

// escreva greet abaixo

const greet = (name, greeting) => {
  const mensagem = typeof greeting === 'undefined' ? 'Hi' : greeting;
  return `${mensagem} ${name}`;
}

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'