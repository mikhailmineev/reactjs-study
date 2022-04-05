import { mul, div, add, minus, square, pow, factorial } from "./mathOperators";

test("mul 1 * 2 to equal 2", () => {
  expect(mul(1, 2)).toBe(2);
});

test("mul 2 * 2 to equal 4", () => {
  expect(mul(2, 2)).toBe(4);
});

test("div 2 / 2 to equal 1", () => {
  expect(div(2, 2)).toBe(1);
});

test("div 4 / 2 to equal 2", () => {
  expect(div(4, 2)).toBe(2);
});

test("add 4 + 2 to equal 6", () => {
  expect(add(4, 2)).toBe(6);
});

test("minus 4 - 2 to equal 2", () => {
  expect(minus(4, 2)).toBe(2);
});

test("square 4 ** to equal 16", () => {
  expect(square(4)).toBe(16);
});

test("pow 3 ^ 3 to equal 27", () => {
  expect(pow(3, 3)).toBe(27);
});

test("factorial 4 ! to equal 24", () => {
  expect(factorial(4)).toBe(24);
});
