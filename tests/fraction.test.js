const Fraction = require('../src/fraction');

describe('making fractions', () => {
  let d7n3 = new Fraction(7, 3);

  test('the numerator of 7/3 is 7', () => {
    expect(d7n3.numerator).toBe(7);
  });

  test('the denominator of 7/3 is 7', () => {
    expect(d7n3.denominator).toBe(3);
  });

});

describe('reducing newly made fractions to lowest terms ', () => {
  const d4n8 = new Fraction(4, 8);

  test('the newly made fraction is 4/8 ', () => {
    expect(d4n8.numerator).toBe(4);
    expect(d4n8.denominator).toBe(8);
  });

  test('after reduction the newly made fraction is 1/2 ', () => {
    d4n8.reduce();
    expect(d4n8.numerator).toBe(1);
    expect(d4n8.denominator).toBe(2);
  });

});

