import getRandomInRange from '../random-number.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
};

const generateRound = () => {
  const operand1 = getRandomInRange(0, 100);
  const operand2 = getRandomInRange(0, 100);
  const operator = getRandomOperator();
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(calculate(operand1, operand2, operator));
  return [question, answer];
};

export default () => runEngine(rules, generateRound);
