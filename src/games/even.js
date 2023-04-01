import readlineSync from 'readline-sync';
import randomNum from '../random-number.js';
import questionnaire from '../index.js';

const evenGame = () => {
  const number = randomNum(100);
  let result = '';
  console.log(number);
  const isEven = () => {
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
  };

  isEven();
  return result;
};

export default evenGame;

// const greeting = () => {
//   console.log('May I have your name?');
//   const name = readlineSync.question('Your answer: ');
//   console.log(`Hello, ${name}!`);
//   return name;
// };

// const startQuestion = () => {
//   const userName = greeting();
//   let correctAnswers = 0;
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   do {
//     const question = randomNum(1, 20);
//     console.log(`Question: ${question}`);
//     let isEven = false;
//     let answer = readlineSync.question('Your answer: ');

//     if ((question % 2 === 0 && isEven === 'yes') || (question % 2 !== 0 && isEven === 'no')) {
//       console.log('Correct!');
//       correctAnswers += 1;
//     } else if (question % 2 === 0 && isEven === 'no') {
//       correctAnswers = 0;
//       console.log(
//         `'${isEven}' is wrong answer ;(. Correct answer was 'yes'. Try again ${userName}!`,
//       );
//     } else if (question % 2 !== 0 && isEven === 'yes') {
//       correctAnswers = 0;
//       console.log(
//         `'${isEven}' is wrong answer ;(. Correct answer was 'no'. Try again ${userName}!`,
//       );
//     } else {
//       correctAnswers = 0;
//       console.log(
//         `Answer "yes" if the number is even, otherwise answer "no". Try again ${userName}!`,
//       );
//     }
//   } while (correctAnswers !== 3);
//   console.log(`Congratulations, ${userName}`);
// };
