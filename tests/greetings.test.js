const Greetings = require('../src/greetings');

test('the greeting is "Hello World"', () => {
  const greetings = new Greetings();
  expect(greetings.helloWorld()).toBe('Hello World');
});
