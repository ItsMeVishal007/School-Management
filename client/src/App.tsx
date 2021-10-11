import React, { useState } from "react";
import "./App.css";

const App: React.FC = (): any => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber((previousNum) => previousNum + 1)}>
        Add
      </button>
      <button onClick={() => setNumber((previousNum) => previousNum - 1)}>
        Sub
      </button>
    </div>
  );
};
export default App;
