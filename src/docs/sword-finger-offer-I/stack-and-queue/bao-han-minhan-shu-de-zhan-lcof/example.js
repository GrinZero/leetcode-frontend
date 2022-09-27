/*
 * @lc app=leetcode.cn id=100302 lang=javascript
 *
 * [100302] 剑指 Offer 30. 包含min函数的栈
 * https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof
 */
// @lc code=start
function MinStack() {
  const minStack = [Infinity];
  const stack = [];

  const push = (value) => {
    stack.push(value);
    minStack.push(Math.min(minStack[minStack.length - 1], value));
  };
  const pop = () => {
    minStack.length > 1 && minStack.pop();
    return stack.pop();
  };
  const top = () => {
    return stack[stack.length - 1];
  };
  const min = () => {
    return minStack[minStack.length - 1];
  };
  Object.assign(this, { push, pop, top, min });
}
// @lc code=ends

module.exports = MinStack;
