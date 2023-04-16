import randomNum from '../random-number.js';

export const evenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const generateEvenRound = () => {
  const question = randomNum(1, 20);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
