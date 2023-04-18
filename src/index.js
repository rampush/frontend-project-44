import readlineSync from 'readline-sync';
import greeting from './cli.js';

const runEngine = (rules, generateRound) => {
  const userName = greeting();
  rules();
  let correctAnswers = 0;
  do {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      correctAnswers = 0;
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again ${userName}!`,
      );
      break;
    }
    if (correctAnswers === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  } while (correctAnswers < 3);
};

export default runEngine;
