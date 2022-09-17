function CQueue() {
  const stackI = [];
  const stackII = [];

  const appendTail = (value) => {
    stackII.push(value);
    return this;
  };
  const deleteHead = () => {
    if (!stackI.length) {
      while (stackII.length) {
        stackI.push(stackII.pop());
      }
    }
    return stackI.pop() || -1;
  };

  Object.assign(this, { appendTail, deleteHead });
}

module.exports = CQueue;
