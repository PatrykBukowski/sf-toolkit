import {parse, build} from "./xml.js";

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

test('Xml to parse should return object', () => {
  const returnValue = parse(mockXml);
  const isObject = typeof returnValue === 'object' && returnValue !== null
  expect(isObject).toBe(true);
})

test('Parser without param should throw error', () => {
  expect(() => {
    parse()
  }).toThrow(new Error('Param must be passed'));
})

test('Parser should throw error when wrong string is passed', () => {
  expect(() => {
    parse(':)')
  }).toThrow(new Error('Wrong value passed'));
})

test('Parser should throw error when number is passed', () => {
  expect(() => {
    parse(1)
  }).toThrow(new Error('Wrong value passed'));
})

test('Parser should throw error when array is passed', () => {
  expect(() => {
    parse([1, 2, 3])
  }).toThrow(new Error('Wrong value passed'));
})

test('Parser should throw error when object is passed', () => {
  expect(() => {
    parse({test: 'object'})
  }).toThrow(new Error('Wrong value passed'));
})


test('Builder should build an xml string', () => {
  const returnJson = parse(mockXml);
  expect(
    build(returnJson)
  ).toBe(mockXml)
})

test('Builder without param should throw error', () => {
  expect(() => {
    build()
  }).toThrow(new Error('Param must be passed'))
})

test('Builder should throw error when string is passed', () => {
  expect(() => {
    build('test')
  }).toThrow(new Error('Wrong value passed'))
})

test('Builder should throw error when number is passed', () => {
  expect(() => {
    build(5)
  }).toThrow(new Error('Wrong value passed'))
})

test('Builder should throw error when array is passed', () => {
  expect(() => {
    build([1,2,3])
  }).toThrow(new Error('Wrong value passed'))
})