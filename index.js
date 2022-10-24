#!/usr/bin/env node

import CustomLabelDifferenceChecker from './customLabelsDifferenceChecker/index.js';
import help from "./help/index.js";
import LabelSortTool from "./labelSortTool/index.js";

const args = process.argv;

const FLAG_PROGRAM = '-p'

const FLAGS = {
  DIFFERENCE_CHECKER: 'differenceChecker',
  DIFFERENCE_CHECKER_SHORT: 'dc',
  SORT: 'sortTool',
  SORT_SHORT_1: 'st',
  SORT_SHORT_2: 'sort'
}

const flagKey = args.indexOf(FLAG_PROGRAM)

if (flagKey > -1) {
  const flagValue = args[flagKey + 1] || ':(';

  switch (flagValue) {
    case FLAGS.DIFFERENCE_CHECKER:
    case FLAGS.DIFFERENCE_CHECKER_SHORT:
      CustomLabelDifferenceChecker();
      break;
    case FLAGS.SORT:
    case FLAGS.SORT_SHORT_1:
    case FLAGS.SORT_SHORT_2:
      LabelSortTool();
      break;
    default:
      console.log('Wrong program');
  }
} else {
  help();
}