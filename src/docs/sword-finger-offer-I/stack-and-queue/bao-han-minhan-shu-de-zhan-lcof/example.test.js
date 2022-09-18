// test
const MinStack = require('./example');

const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.assert(minStack.min() === -3);
minStack.pop();
console.assert(minStack.top() === 0);
console.assert(minStack.min() === -2);
