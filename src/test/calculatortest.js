const calculator = require('../model/calculator');

test('addition', () => {
    let result = calculator.addition(2,4);
    expect(result).toBe(6);
});

test('subtraction', () => {
    let result = calculator.subtraction(4,2);
    expect(result).toBe(2);
});

test('multiplication', () => {
    let result = calculator.multiplication(2,4);
    expect(result).toBe(8);
});

test('division', () => {
    let result = calculator.division(4,2);
    expect(result).toBe(2);
});

test('square', () => {
    let result = calculator.square(2);
    expect(result).toBe(4);
});

test('squareroot', () => {
    let result = calculator.squareroot(4);
    cexpect(result).toBe(2);
});