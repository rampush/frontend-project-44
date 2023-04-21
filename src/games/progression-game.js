import randomNum from '../random-number.js';

export const progressionRules = 'What number is missing in the progression?';

export const generateProgressionRound = () => {
  const progression = [randomNum(2, 15)];
  const step = randomNum(2, 5);
  const progressionLength = randomNum(5, 11);
  const randomIndex = randomNum(0, progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + step);
  }
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
