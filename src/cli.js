import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;
