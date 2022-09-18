// test
const CQueue = require('./example');

const test = (opearationQueue, payloadQueue, toBe) => {
  let queue = null;
  const result = [];
  opearationQueue.forEach((opearation, index) => {
    const payload = payloadQueue[index];
    switch (opearation) {
      case 'CQueue':
        queue = new CQueue(...payload);
        result.push(null);
        break;
      case 'appendTail':
        queue.appendTail(...payload);
        result.push(null);
        break;
      case 'deleteHead':
        result.push(queue.deleteHead(...payload));
        break;
      default:
        break;
    }
  });
  console.log(result);
  console.assert(JSON.stringify(result) === JSON.stringify(toBe));
};

test(
  ['CQueue', 'appendTail', 'deleteHead', 'deleteHead'],
  [[], [3], [], []],
  [null, null, 3, -1],
);

test(
  [
    'CQueue',
    'deleteHead',
    'appendTail',
    'appendTail',
    'deleteHead',
    'deleteHead',
  ],
  [[], [], [5], [2], [], []],
  [null, -1, null, null, 5, 2],
);
