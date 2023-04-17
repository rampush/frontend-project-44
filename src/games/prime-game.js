import randomNum from '../random-number.js';

export const primeRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const generatePrimeRound = () => {
  const question = randomNum(1, 10);
  let answer;
  let dividerCount = 0;

  for (let i = 1; i <= question; i += 1) {
    if (question % i === 0) {
      dividerCount += 1;
    }
  }
  if (dividerCount > 2 || question === 1) {
    answer = 'no';
  } else {
    answer = 'yes';
  }

  return [question, answer];
};
