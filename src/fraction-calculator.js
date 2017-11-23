const Fraction = require('../src/fraction');

class FractionCalculator {

  constructor() {

  }

  add(term1, term2) {
    let resultNumerator = (term1.numerator * term2.denominator) + (term2.numerator * term1.denominator);
    let resultDenominator = term1.denominator * term2.denominator;
    return new Fraction(resultNumerator, resultDenominator);
  }

}

module.exports = FractionCalculator;