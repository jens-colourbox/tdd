class Fraction {

  constructor(numerator, denominator) {
    this._numerator;
    this._denominator;

    this.numerator = numerator;
    this.denominator = denominator;
  }

  set numerator(int) {
    if (int !== NaN && int === parseInt(int)) {
      this._numerator = int;
    }
  }

  get numerator() {
    return this._numerator;
  }

  set denominator(int) {
    if (int !== NaN && int === parseInt(int)) {
      this._denominator = int;
    }
  }

  get denominator() {
    return this._denominator;
  }

}

module.exports = Fraction;
