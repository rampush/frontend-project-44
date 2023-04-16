#!/usr/bin/env node
import runEngine from '../src/index.js';
import { evenRules, generateEvenRound } from '../src/games/even-game.js';

runEngine(evenRules, generateEvenRound);
