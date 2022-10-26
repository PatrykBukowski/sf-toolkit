import xmlf from './xmlf.js'
import {parse} from "./xml.js";

const mockXml =
  `<?xml version="1.0" encoding="UTF-8"?>
<CustomLabels xmlns="http://soap.sforce.com/2006/04/metadata">
  <labels>
    <fullName>ACCOUNT231</fullName>
    <categories>ACCOUNT</categories>
    <language>en_US</language>
    <protected>false</protected>
    <shortDescription>ACCOUNT</shortDescription>
    <value>ACCOUNT</value>
  </labels>
</CustomLabels>`

test('Xmlf should correctly find a value in a object', () => {
  Object.prototype.xmlf = xmlf;
  const obj = parse(mockXml);
  const result = obj.xmlf('CustomLabels')
  expect(result).not.toBeNull()
  expect(typeof result).toBe('object')
})

test('Xmlf should correctly find a value in an array', () => {
  Object.prototype.xmlf = xmlf;
  const obj = parse(mockXml);
  const result = obj.elements.xmlf('CustomLabels')
  expect(result).not.toBeNull()
  expect(typeof result).toBe('object')
})

test('Xmlf should correctly find type when elements are not available', () => {
  Object.prototype.xmlf = xmlf;
  const obj = parse(mockXml);
  const result = obj.xmlf('CustomLabels').xmlf('labels').xmlf('fullName').xmlf('text').text
  expect(result).not.toBeNull()
  expect(typeof result).toBe('string')
})