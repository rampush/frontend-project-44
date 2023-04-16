#!/usr/bin/env node
import { evenRules, generateRound } from '../src/games/even-game.js';
import runEngine from '../src/index.js';

runEngine(evenRules, generateRound);
