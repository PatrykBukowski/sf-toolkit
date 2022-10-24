import {xml2js,js2xml} from 'xml-js';

const parse = (obj) => {
  return xml2js(obj)
}

const build = (obj) => {
  return js2xml(obj, {spaces: 2});
}

export {parse, build}