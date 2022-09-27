---
group:
  title: 剑指offer I
  order: 1
---

# 栈与队列（简单）

## 剑指 Offer 09. 用两个栈实现队列

### 题目描述

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead  操作返回 -1 )

> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof

### 图解

利用栈先进后出的特点，用栈 I 来接收栈 II 的数据，然后再将栈 I 的数据出栈，就实现了队列的先进先出。

```tsx
/**
 * inline: true
 */
import React from 'react';
import Page from './yong-liang-ge-zhan-shi-xian-dui-lie-lcof';

const Main: React.FC<void> = () => {
  return <Page />;
};
export default Main;
```

### 题解

```js
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
```

## 剑指 Offer 30. 包含 min 函数的栈

### 题目描述

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof

### 图解

```tsx
/**
 * inline: true
 */
import React from 'react';
import Page from './bao-han-minhan-shu-de-zhan-lcof';

const Main: React.FC<void> = () => {
  return <Page />;
};
export default Main;
```

### 题解
```js
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
```
