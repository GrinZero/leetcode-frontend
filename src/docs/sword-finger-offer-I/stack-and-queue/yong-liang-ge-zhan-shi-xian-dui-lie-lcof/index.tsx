import React, { useState, useRef, useEffect } from 'react';

import { Button, MessagePlugin } from 'tdesign-react';

import styles from './index.less';

const Main = () => {
  const [stack, setStack] = useState<{
    left: number[];
    right: number[];
    queue: number[];
  }>({
    left: [],
    right: [],
    queue: [],
  });

  const [outPushList, setOutPushList] = useState<number[]>([]);

  const handleAppendTail = () => {
    if (stack.right.length >= 10) {
      MessagePlugin.warning('别点了别点了，最多就10个');
      return;
    }
    const newValue = (): number => {
      const value = ~~(Math.random() * 99);
      if (stack.queue.includes(value)) {
        return newValue();
      }
      return value;
    };

    const value = newValue();
    setStack({
      ...stack,
      right: [...stack.right, value],
      queue: [...stack.queue, value],
    });
  };

  const timeIDList = useRef<[NodeJS.Timer, any][]>([]);
  const intervalID = useRef<NodeJS.Timer>();
  const [outValue, setOutValue] = useState<number | null>(null);

  useEffect(() => {
    if (outValue !== null) {
      const clearDecor = (index: number, action: () => void) => {
        timeIDList.current[index][1] = null;
        action();
      };

      const action = () => {
        setStack(({ left, queue, right }) => {
          const out = left.pop();
          setOutPushList([...outPushList, out ?? -1]);
          queue.shift();
          return {
            left,
            queue,
            right,
          };
        });
      };

      timeIDList.current.push([
        setTimeout(
          clearDecor.bind(this, timeIDList.current.length, action),
          500,
        ),
        action,
      ]);
      const clearOutValue = () => setOutValue(null);
      timeIDList.current.push([
        setTimeout(
          clearDecor.bind(this, timeIDList.current.length, clearOutValue),
          800,
        ),
        clearOutValue,
      ]);
    }
  }, [outValue]);

  const handleDeleteHead = () => {
    const { left, right, queue } = stack;

    const shiftAction = () => {
      setOutValue(queue[0]);
    };

    // 处理定时器没跑完前的事件
    if (timeIDList.current.length !== 0) {
      timeIDList.current.forEach(([timeid, action]) => {
        clearTimeout(timeid);
        action?.();
      });
      timeIDList.current = [];
    }
    if (intervalID.current) {
      clearInterval(intervalID.current);
      intervalID.current = undefined;
      while (right.length) {
        left.push(right.pop()!);
      }
      setStack({ left, right, queue });
      shiftAction();
      return;
    }

    const len = left.length;
    if (!left.length) {
      const action = () => {
        if (right.length) {
          left.push(right.pop()!);
          setStack({ left, right, queue });
        } else {
          clearInterval(intervalID.current);
          intervalID.current = undefined;
          timeIDList.current.push([
            setTimeout(() => {
              shiftAction();
            }, 800),
            shiftAction,
          ]);
        }
      };
      action();
      intervalID.current = setInterval(action, 520);
      return;
    }
    setStack({ left, right, queue });

    if (len) {
      shiftAction();
    } else {
      timeIDList.current.push([setTimeout(shiftAction, 500), shiftAction]);
    }
  };

  const handleReset = () => {
    setStack({
      left: [],
      right: [],
      queue: [],
    });
    timeIDList.current.forEach(([timeid, action]) => {
      clearTimeout(timeid);
      action?.();
    });
    timeIDList.current = [];
    clearInterval(intervalID.current);
    intervalID.current = undefined;
    setOutValue(null);
    setOutPushList([]);
  };

  return (
    <div className={`flex flex-col w-[700px]`}>
      <div className={`${styles.queue}`}>
        <span>栈 I</span>
        {stack.left.map((item, index) => (
          <div
            className={`${
              styles.item
            } mr-2 animate__animated animate__fadeInRight ${
              index === stack.left.length - 1 ? styles.active : ''
            } ${outValue === item ? 'animate__fadeOutRight' : ''}`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={`${styles.queue} mt-3`}>
        <span>栈 II</span>
        {stack.right.map((item, _) => (
          <div
            className={`${styles.item} mr-2 animate__animated animate__fadeInRight`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={`${styles.queue} mt-3`}>
        <span>队列</span>
        {stack.queue.map((item, index) => (
          <div
            className={`${
              styles.item
            } mr-2 animate__animated animate__fadeInRight ${
              index === 0 ? styles.active : ''
            } ${outValue === item ? 'animate__fadeOutLeft' : ''}`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={`${styles.queue} ${styles.output} mt-3`}>
        <strong className={`px-4`}>输出</strong>
        {outPushList.map((item, index) => (
          <div
            className={`${styles.item} mr-2 animate__animated animate__fadeInRight`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={`flex mt-4 w-full justify-between`}>
        <Button className="mr-4" block={true} onClick={handleAppendTail}>
          appendTail
        </Button>
        <Button className="mr-4" block={true} onClick={handleDeleteHead}>
          deleteHead
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
};

export default Main;
