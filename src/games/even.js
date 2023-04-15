import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';

const rules = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  return description;
};

const evenGame = () => {
  const number = randomNum(20);
  return number;
};

export { evenGame, rules };
