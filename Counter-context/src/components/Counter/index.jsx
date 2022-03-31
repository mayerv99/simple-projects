import React from "react";

import useCount from "../../Hooks/useCount";

function Counter() {
  const { count, setCount } = useCount();
  return (
    <div>
      <span>Counter: {count}</span>
      <br />
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default Counter;
