import getRandomInRange from '../random-number.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  let dividerCount = 0;

  for (let i = 1; i <= question; i += 1) {
    if (question % i === 0) {
      dividerCount += 1;
    }
  }

  return dividerCount <= 2;
};

const generateRound = () => {
  const question = getRandomInRange(1, 10);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runEngine(rules, generateRound);
