import { useState } from "react";

export default function UseSate() {
  function getExpensiveCount() {
    return 9999;
  }
  const [count, setCount] = useState(() => getExpensiveCount());

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}
