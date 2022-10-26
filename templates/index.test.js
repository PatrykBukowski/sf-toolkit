import {templateMain} from "./index.js";

test('templateMain should return an xml object', () => {
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