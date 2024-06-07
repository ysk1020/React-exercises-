import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const today = new Date("19 may 2024");
  today.setDate(today.getDate() + count);

  return (
    <div>
      <div className="step-button">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div className="count-button">
        <button onClick={() => setCount((c) => c - step)}> -</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p className="message">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago from today was `}
        </span>
        <span>{today.toDateString()}</span>
      </p>
    </div>
  );
}
