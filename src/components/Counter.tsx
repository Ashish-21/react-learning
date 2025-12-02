import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <>
      <button onClick={increaseCount}>{`count is ${count}`}</button>
    </>
  );
}

export default Counter;
