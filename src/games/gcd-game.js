import getRandomInRange from '../random-number.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  let answer;
  for (let i = 1; i <= number1 && i <= number2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      answer = i;
    }
  }
  return answer;
};

const generateRound = () => {
  const number1 = getRandomInRange(1, 99);
  const number2 = getRandomInRange(1, 99);
  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));
  return [question, answer];
};

export default () => runEngine(rules, generateRound);
