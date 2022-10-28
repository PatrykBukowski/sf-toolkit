import {templateMain} from "./index.js";

test('templateMain should return an xml object without elements', () => {
  const expectValue = {
    declaration: {
      attributes: {version: '1.0', encoding: 'UTF-8'}
    }, elements: [{
      type: 'element',
      name: 'CustomLabels',
      attributes: {xmlns: 'http://soap.sforce.com/2006/04/metadata'},
      elements: []
    }]
  }
  const template = templateMain();
  expect(template).toStrictEqual(expectValue);
})

test('templateMain should return an xml object when array is passes', () => {
  const expectValue = {
    declaration: {
      attributes: {version: '1.0', encoding: 'UTF-8'}
    }, elements: [{
      type: 'element',
      name: 'CustomLabels',
      attributes: {xmlns: 'http://soap.sforce.com/2006/04/metadata'},
      elements: ['newValue']
    }]
  }
  // TODO change to pass only xml elements
  const param = ['newValue']
  const template = templateMain(param);
  expect(template).toStrictEqual(expectValue);
})