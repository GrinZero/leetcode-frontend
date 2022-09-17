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

```tsx
/**
 * inline: true
 */
import React from 'react';
import Page from './achieve-queue-using-two-stacks';

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
