import React, { useRef } from 'react';

import { Button } from 'tdesign-react';
import { List } from 'magic-design-react';
import type { ListRef } from 'magic-design-react';

const Main = () => {
  const minStack = useRef<ListRef<number>>(null);
  const stack = useRef<ListRef<number>>(null);

  const [topValue, setTopValue] = React.useState<number | null>(null);
  const [minValue, setMinValue] = React.useState<number | null>(null);

  const handlePush = () => {
    if (!stack || !stack.current) return;
    if (!minStack || !minStack.current) return;
    const value = ~~(Math.random() * 100);
    const { current: stackCurrent } = stack;
    const { current: minStackCurrent } = minStack;

    stackCurrent.push(value);
    minStackCurrent.push(
      Math.min(minStackCurrent.value[minStackCurrent.length - 1], value),
    );
  };

  const handlePop = () => {
    if (!stack || !stack.current) return;
    if (!minStack || !minStack.current) return;
    minStack.current.length > 1 && minStack.current.pop();
    return stack.current.pop();
  };

  const handleReset = () => {
    if (!stack || !stack.current) return;
    if (!minStack || !minStack.current) return;
    stack.current.reset();
    minStack.current.reset();
    minStack.current.setData([Infinity]);
    setTopValue(null);
    setMinValue(null);
  };

  const handleTop = () => {
    if (!stack || !stack.current) return;
    setTopValue(stack.current.value[stack.current.length - 1]);
  }

  const handleMin = () => {
    if (!minStack || !minStack.current) return;
    setMinValue(minStack.current.value[minStack.current.length - 1]);
  }

  return (
    <div className={`flex flex-col w-[700px]`}>
      <List
        className="min-h-[60px]"
        headRender={() => <span className="mr-2">Min栈</span>}
        defaultValue={[Infinity]}
        ref={minStack}
      ></List>
      <List
        className="min-h-[60px] mt-2"
        headRender={() => <span className="mr-2">Base栈</span>}
        defaultValue={[]}
        ref={stack}
      ></List>

      <div className={`flex mt-4 w-full justify-between`}>
        <div className='w-[50%]'>
          <span className="font-bold">TOP</span>
          <span className={`ml-4`}>{topValue ?? "Empty"}</span>
        </div>
        <div className='w-[50%]'>
          <span className="font-bold">MIN</span>
          <span className={`ml-4`}>{minValue ?? "Empty"}</span>
        </div>
      </div>

      <div className={`flex mt-4 w-full justify-between`}>
        <Button className="mr-4" block={true} onClick={handlePush}>
          push
        </Button>
        <Button className="mr-4" block={true} onClick={handlePop}>
          pop
        </Button>
        <Button className="mr-4" block={true} onClick={handleTop}>
          top
        </Button>
        <Button className="mr-4" block={true} onClick={handleMin}>
          min
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
};

export default Main;
