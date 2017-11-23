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
