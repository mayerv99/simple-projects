import React from "react";

import Counter from "./components/Counter";
import CounterMirror from "./components/CounterMirror";

import CountProvider from "./Context/CountContext";

function App() {
  return (
    <CountProvider>
      <div>
        <Counter />
        <hr />
        <CounterMirror />
      </div>
    </CountProvider>
  );
}

export default App;
