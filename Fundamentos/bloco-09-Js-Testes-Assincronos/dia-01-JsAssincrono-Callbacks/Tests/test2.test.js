// Vamos a mais um exemplo para fixação, desta vez você irá implementar uma função que espera um tempo e retorna a soma de dois números:
/*Quando estiver realizando testes, é muito importante verificar se os resultados exibidos não são falso-positivos. No exemplo acima, em que o teste está passando, experimente mudar a implementação da função asyncSum para que retorne valores incorretos e verifique se o teste irá falhar. Por exemplo, se mudarmos os resultado para ser a + b + 1 o teste falha dizendo que esperava 15 , mas recebeu 16 .*/

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b + 1;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});