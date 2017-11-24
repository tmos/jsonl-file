import test from 'ava';
import path from 'path';
import JsonlFile from '../dist';

const fileName = path.resolve(__dirname, 'test.jsonl');

test('Create jsonl file', (t) => {
  const jsonl = new JsonlFile(fileName);
  jsonl.write({
    a: 1,
    b: 2,
    c: {
      x: 11,
      y: 22,
      z: [1, 2, 3, 45],
    },
  });
  jsonl.write({ newLine: [1, 2, 3] });
  jsonl.close();
  t.pass();
});
