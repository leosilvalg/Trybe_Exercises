const sum = require('./sum');

test('Soma de dois valores', () => {
    expect(sum(4, 5)).toEqual(9);
});