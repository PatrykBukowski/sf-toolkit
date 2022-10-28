#!/usr/bin/env node
import CustomLabelDifferenceChecker from "../customLabelsDifferenceChecker/index.js";
import {diffHelp} from "../help/index.js";

if (process.argv.length > 2) CustomLabelDifferenceChecker();
else diffHelp();