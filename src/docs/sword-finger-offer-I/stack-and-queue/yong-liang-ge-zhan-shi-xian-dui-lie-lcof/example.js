/*
 * @lc app=leetcode.cn id=100273 lang=javascript
 *
 * [100273] 剑指 Offer 09. 用两个栈实现队列
 * https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 */

// @lc code=start
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
// @lc code=ends

module.exports = CQueue;
