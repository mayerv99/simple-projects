import React from "react";

import useCount from "../../Hooks/useCount";

function CounterMirror() {
  const { count } = useCount();
  return <div>CounterMirror: {count}</div>;
}

export default CounterMirror;
