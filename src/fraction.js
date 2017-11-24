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

  reduce() {
    let factor;
    if (Math.abs(this.numerator) <= Math.abs(this.denominator)) {
      factor = this.numerator;
    } else {
      factor = this.denominator;
    }

    factor = Math.abs(factor);
    while (factor > 0) {
      if (this.numerator % factor === 0 && this.denominator % factor === 0) {
        break;
      }
      factor--;
    }

    this.numerator = this.numerator / factor;
    this.denominator = this.denominator / factor;

    return this;

  }

}

module.exports = Fraction;
