// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Pitaya', 'Abacate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Leite condensado', 'Leite ninho'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função 
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));