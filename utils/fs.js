import * as fs from 'fs';

const read = (fileName) => {
  return fs.readFileSync(fileName).toString('utf-8');
}

const write = (filename, data) => {
  fs.writeFileSync(filename, data)
}

export {read, write}