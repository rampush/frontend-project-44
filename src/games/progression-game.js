import getRandomInRange from '../random-number.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (firstNum, step, progressionLength) => {
  const progression = [firstNum];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + step);
  }

  return progression;
};

const generateRound = () => {
  const firstNum = getRandomInRange(2, 15);
  const step = getRandomInRange(2, 5);
  const progressionLength = getRandomInRange(5, 11);

  const progression = generateProgression(firstNum, step, progressionLength);
  const randomIndex = getRandomInRange(0, progressionLength);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runEngine(rules, generateRound);
