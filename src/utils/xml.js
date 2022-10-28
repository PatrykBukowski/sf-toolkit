import {js2xml, xml2js} from 'xml-js';

const parse = (obj) => {
  if (obj === undefined || obj === null) throw Error('Param must be passed');
  try {
    if (typeof obj === 'number') throw Error('Param cannot be a number');
    return xml2js(obj)
  } catch (error) {
    throw new Error('Wrong value passed', {cause: error})
  }
}

const build = (obj) => {
  if (obj === undefined || obj === null) throw Error('Param must be passed');
  try {
    if (typeof obj === 'string' || obj instanceof String) throw Error('Param cannot be a string')
    if (typeof obj === 'number') throw Error('Param cannot be a number');
    if (Array.isArray(obj)) throw Error('Param cannot be an array')
    return js2xml(obj, {spaces: 4});
  } catch (error) {
    throw new Error('Wrong value passed', {cause: error})
  }
}

export {parse, build}