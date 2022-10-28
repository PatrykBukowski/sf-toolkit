import * as fs from 'src/utils/fs.js';

const read = (fileName) => {
  return fs.readFileSync(fileName).toString('utf-8');
}

const write = (filename, data) => {
  fs.writeFileSync(filename, data)
}

export {read, write}