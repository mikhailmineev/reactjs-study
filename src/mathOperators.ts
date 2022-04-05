export type SingleOperationType = (first: number) => number;
export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const square: SingleOperationType = (first: number): number =>
  first * first;

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number =>
  second === 0 || second === 1 ? first : first * pow(first, second - 1);

export const factorial: SingleOperationType = (first: number): number =>
  first === 0 || first === 1 ? 1 : first * factorial(first - 1);

export const singleOperators: { [key: string]: SingleOperationType } = {
  "**": square,
  "!": factorial,
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "^": pow,
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathPriorities: { [key: string]: number } = {
  FIRST: 1,
  SECOND: 2,
};

const { FIRST, SECOND } = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "^": FIRST,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
