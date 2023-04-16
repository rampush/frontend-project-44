#!/usr/bin/env node
import runEngine from '../src/index.js';
import { gcdRules, generateGcdRound } from '../src/games/gcd-game.js';

runEngine(gcdRules, generateGcdRound);
