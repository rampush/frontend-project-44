#!/usr/bin/env node
import runEngine from '../src/index.js';
import { primeRules, generatePrimeRound } from '../src/games/prime-game.js';

runEngine(primeRules, generatePrimeRound);
