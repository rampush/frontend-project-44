import { question } from 'readline-sync';
import randomNum from '../random-number.js';

export const calcRules = () => {
  return console.log('What is the result of the expression?');
};

export const generateCalcRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[randomNum(3)];
  const operand1 = randomNum(21);
  const operand2 = randomNum(21);

  const question = `${operand1} ${operator} ${operand2}`;

  const answer =
    operator === '+'
      ? operand1 + operand2
      : operator === '-'
      ? operand1 - operand2
      : operand1 * operand2;

  return [question, String(answer)];
};
