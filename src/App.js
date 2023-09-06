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
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleMinusStep() {
    setStep((step) => step - 1);
  }

  function handleMinusCount() {
    setCount((count) => count - step);
  }

  function handleAddStep() {
    setStep((step) => step + 1);
  }

  function handleAddCount() {
    setCount((count) => count + step);
  }

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  return (
    <>
      <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent: "center" }}>
        <button onClick={handleMinusStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleAddStep}>+</button>
      </div>
      <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent: "center" }}>
        <button onClick={handleMinusCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleAddCount}>+</button>
      </div>
      <div style={{ display: "flex", gap: 5, alignItems: "center", justifyContent: "center" }}>
        <p>
          {count === 0 ? `Today is` : `${count} days from today is`} {currentDate.toDateString()}
        </p>
      </div>
    </>
  );
}
