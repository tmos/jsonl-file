import fs from 'fs';

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

export default JsonlFile;
