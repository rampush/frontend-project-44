import randomNum from '../random-number.js';

export const evenRules = () => {
  return console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const generateRound = () => {
  const question = randomNum(20);
  let answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
