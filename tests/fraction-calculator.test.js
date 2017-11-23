const Fraction = require('../src/fraction');
const FractionCalculator = require('../src/fraction-calculator');

describe('adding fractions using the calculator', () => {
  const fractionCalculator = new FractionCalculator();
  
  test('7/3 and 4/5 is ', () => {
    let d7n3 = new Fraction(7, 3);
    let d4n5 = new Fraction(4, 5);
    let result = fractionCalculator.add(d7n3, d4n5);

    expect(result.numerator).toBe(47);
    expect(result.denominator).toBe(15);
  });

  test('12/7 and 2/3 is ', () => {
    let d12n7 = new Fraction(12, 7);
    let d2n3 = new Fraction(2, 3);
    let result = fractionCalculator.add(d12n7, d2n3);

    expect(result.numerator).toBe(50);
    expect(result.denominator).toBe(21);
  });

});
