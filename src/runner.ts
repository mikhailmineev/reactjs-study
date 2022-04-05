import { ParsedLineType, parser } from "./parser";

import {
  singleOperatorsCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
} from "./engine";

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const operators: { (data: ParsedLineType): ParsedLineType }[] = [
    singleOperatorsCalc,
    firstPrioritiesCalc,
    secondPrioritiesCalc,
  ];
  let processedStack = stack;
  for (let i = 0; i < operators.length; i++) {
    processedStack = operators[i](processedStack);
    if (processedStack.length === 1) {
      return Number(processedStack[0]);
    }
  }
};
