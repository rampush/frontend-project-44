import readlineSync from 'readline-sync';
import calcGame from './games/calc.js';
import evenGame from './games/even.js';
import randomNum from './random-number.js';

const questionnaire = () => {
  const question = evenGame();
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
};

questionnaire();

export default questionnaire;
