#!/usr/bin/env node
import {read, write} from "../utils/fs.js";
import {build, parse} from '../utils/xml.js';
import {templateAll, templateMain} from "../templates/index.js";
import {difference, intersection} from "../sets/index.js";

const args = process.argv;

const flagger = (flag, def) => {
  const flagKey = args.indexOf(flag);
  return (flagKey > -1) ? args[flagKey + 1] || def : def
}

const CustomLabelDifferenceChecker = () => {
  const filename1 = flagger('-in1', 'file1.xml');
  const filename2 = flagger('-in2', 'file2.xml');
  const mode = flagger('-m', 'all');
  const outputname1 = flagger('-o1', mode === 'allInOne' ? 'output.xml' : 'correct.xml');
  const outputname2 = flagger('-o2', 'missingInA.xml');
  const outputname3 = flagger('-o3', 'missingInB.xml');
  const outputname4 = flagger('-o4', 'incorrect.xml');
  Object.prototype.xmlf = function (value) {
    if (Array.isArray(this)) return this.find(el => el.name === value)
    let element = this.elements.find(el => el.name === value)
    if (!element) element = this.elements.find(el => el.type === value);
    return element
  }

  const fileA = parse(read(filename1))
  const fileB = parse(read(filename2))


  let correct
  let missingInA
  let missingInB
  let incorrectA = []
  let incorrectB = []
  let incorrect = [];


  const check = () => {
    const intersection1 = intersection(fileA, fileB);
    for (const elementA of intersection1) {
      const elementB = fileB.xmlf('CustomLabels').elements.find(el => {
        const fullNameA = elementA.xmlf('fullName').xmlf('text').text
        const fullNameB = el.xmlf('fullName').xmlf('text').text;
        return fullNameA === fullNameB
      });
      const valueA = elementA.xmlf('value').xmlf('text').text;
      const valueB = elementB.xmlf('value').xmlf('text').text;
      if (valueA === valueB) {
        correct = elementA
      } else {
        incorrectA.push(elementA)
        incorrectB.push(elementB)
      }
    }
    missingInA = difference(fileB, fileA)
    missingInB = difference(fileA, fileB)

    for (const [index, value] of incorrectA.entries()) {
      const tagA = {
        type: 'element', name: 'valueA', elements: incorrectA[index].elements.xmlf('value').elements
      }
      const tagB = {
        type: 'element', name: 'valueB', elements: incorrectB[index].elements.xmlf('value').elements
      }
      incorrect.push({
        type: value.type, name: value.name, elements: [value.elements.xmlf('fullName'), tagA, tagB,]
      })
    }
  }
  check();

  if (
    mode === 'allInOne'
  ) {
    write(outputname1, build(templateAll({
      correct: [correct], missingInA: missingInA, missingInB: missingInB, incorrect: incorrect
    })))
  } else {
    write(outputname1, build(templateMain([correct])))
    write(outputname2, build(templateMain(missingInA)))
    write(outputname3, build(templateMain(missingInB)))
    write(outputname4, build(templateMain(incorrect)))
  }


}

export default CustomLabelDifferenceChecker