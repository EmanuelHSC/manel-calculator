export class Calculator {
    // Soma
    public add(a: number, b: number): number {
      return a + b;
    }
  
    // Subtração
    public subtract(a: number, b: number): number {
      return a - b;
    }
  
    // Multiplicação
    public multiply(a: number, b: number): number {
      return a * b;
    }
  
    // Divisão
    public divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    }
  }
  