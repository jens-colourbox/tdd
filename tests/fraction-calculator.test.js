const Fraction = require('../src/fraction');
const FractionCalculator = require('../src/fraction-calculator');

describe('adding fractions using the calculator', () => {

  test('7/3 and 4/5 is ', () => {
    const fractionCalculator = new FractionCalculator();
    const d7n3 = new Fraction(7, 3);
    const d4n5 = new Fraction(4, 5);

    const result = fractionCalculator.add(d7n3, d4n5);

    expect(result.numerator).toBe(47);
    expect(result.denominator).toBe(15);
  });

});
