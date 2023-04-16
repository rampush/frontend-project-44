#!/usr/bin/env node
import runEngine from '../src/index.js';
import { calcRules, generateCalcRound } from '../src/games/calc-game.js';

runEngine(calcRules, generateCalcRound);
