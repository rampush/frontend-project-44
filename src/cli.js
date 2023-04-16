import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('brain-games\nWelcome to the Brain Games!\nMay I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greeting;
