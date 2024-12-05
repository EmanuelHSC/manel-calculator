"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    // Soma
    add(a, b) {
        return a + b;
    }
    // Subtração
    subtract(a, b) {
        return a - b;
    }
    // Multiplicação
    multiply(a, b) {
        return a * b;
    }
    // Divisão
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}
exports.Calculator = Calculator;
