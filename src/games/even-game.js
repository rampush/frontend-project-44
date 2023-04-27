import getRandomInRange from '../random-number.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => (question % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const question = getRandomInRange(1, 20);
  const answer = isEven(question);
  return [question, answer];
};

export default () => runEngine(rules, generateRound);
