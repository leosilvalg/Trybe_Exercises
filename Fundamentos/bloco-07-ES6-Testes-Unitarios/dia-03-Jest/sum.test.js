const sum = require('./sum');

test('Soma de dois valores', () => {
    expect(sum(4, 5)).toEqual(9);
});

test('Retorna a soma de dois numeros', () => {
    expect(sum(0,0)).toEqual(0);
});

test('Dispara um erro caso receba um parametro string', () => {
    expect(() => sum(4, '5')).toThrowError();
})