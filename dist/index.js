'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs = _interopDefault(require('fs'));

class JsonlFile {
  constructor(fileName) {
    this.stream = fs.createWriteStream(fileName);
  }
  write(lineOfJson) {
    this.stream.write(`${JSON.stringify(lineOfJson)}\n`);
  }
  close() {
    this.stream.end();
  }
}

module.exports = JsonlFile;
