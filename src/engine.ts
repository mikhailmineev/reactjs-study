import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
  singleOperators,
} from "./mathOperators";

const { FIRST, SECOND } = mathPriorities;

export const singleOperatorsCalc = (stack: ParsedLineType): ParsedLineType => {
  let result: ParsedLineType = [];

  for (let key = 0; key < stack.length; key++) {
    const item = result[result.length - 1];
    const nextItem = stack[key];

    if (singleOperators[nextItem] !== undefined) {
      result = [
        ...result.slice(0, -1),
        singleOperators[nextItem](Number(item)),
      ];
    } else {
      result.push(nextItem);
    }
  }

  return result;
};

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  return prioritiesCalc(stack, FIRST);
};

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType => {
  return prioritiesCalc(stack, SECOND);
};

const prioritiesCalc = (
  stack: ParsedLineType,
  priority: number
): ParsedLineType => {
  let result: ParsedLineType = [];

  for (let key = 0; key < stack.length; key++) {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];
    const nextItem = stack[key];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === priority) {
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
  }

  return result;
};
