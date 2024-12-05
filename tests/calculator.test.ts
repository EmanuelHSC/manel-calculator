import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  const calculator = new Calculator();

  test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow("Division by zero is not allowed.");
  });
});
