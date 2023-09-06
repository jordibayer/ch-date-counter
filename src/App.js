import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div classname="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleMinusCount() {
    setCount((count) => count - step);
  }

  function handleAddCount() {
    setCount((count) => count + step);
  }

  function resetStates() {
    setStep(1);
    setCount(0);
  }

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  return (
    <>
      <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent: "center" }}>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <p>{step}</p>
      </div>
      <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent: "center" }}>
        <button onClick={handleMinusCount}>-</button>
        <input
          type="text"
          min="0"
          max="10"
          placeholder="0"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleAddCount}>+</button>
      </div>
      <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent: "center" }}>
        <p>
          {count === 0 ? `Today is` : count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago was`} {currentDate.toDateString()}
        </p>
      </div>
      {step !== 1 || count !== 0 ? (
        <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent: "center" }}>
          <button onClick={resetStates}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
