#!/usr/bin/env node
import runEngine from '../src/index.js';
import { progressionRules, generateProgressionRound } from '../src/games/progression-game.js';

runEngine(progressionRules, generateProgressionRound);
