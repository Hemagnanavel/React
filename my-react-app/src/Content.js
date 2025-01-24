import React, { useState } from 'react';

const Content = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      Content <br />
      <button onClick={decrement}>-</button>
      <br />
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Content;
