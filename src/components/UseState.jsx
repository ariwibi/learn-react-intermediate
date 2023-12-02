import { useState, useEffect } from "react";

export default function UseSate() {
  function getExpensiveCount() {
    return 9999;
  }
  const [count, setCount] = useState(() => getExpensiveCount());

  useEffect(() => {
    console.count("in useEffect");
    document.title = `you have clicked ${count}`;
  });

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  console.count("rendering");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}
