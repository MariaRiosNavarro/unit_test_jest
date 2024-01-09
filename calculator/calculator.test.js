import calculator from "./calculator";

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
});
