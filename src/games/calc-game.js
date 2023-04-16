import randomNum from '../random-number.js';

export const calcRules = () => console.log('What is the result of the expression?');

export const generateCalcRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[randomNum(0, 2)];
  const operand1 = randomNum(1, 20);
  const operand2 = randomNum(1, 20);
  let answer;

  const question = `${operand1} ${operator} ${operand2}`;

  if (operator === '+') {
    answer = operand1 + operand2;
  } else if (operator === '-') {
    answer = operand1 - operand2;
  } else {
    answer = operand1 * operand2;
  }

  answer = answer.toString();

  return [question, answer];
};
