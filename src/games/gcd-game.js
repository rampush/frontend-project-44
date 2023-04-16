import randomNum from '../random-number.js';

export const gcdRules = () => console.log('Find the greatest common divisor of given numbers.');

export const generateGcdRound = () => {
  const number1 = randomNum(1, 99);
  const number2 = randomNum(1, 99);
  let answer;
  let greatestNum;

  if (number1 > number2) {
    greatestNum = number1;
  } else {
    greatestNum = number2;
  }

  const question = `${number1} ${number2}`;

  for (let i = 1; i <= greatestNum; i += i) {
    if (number1 % i === 0 && number2 % i === 0) {
      answer = i.toString();
    }
  }

  return [question, answer];
};
