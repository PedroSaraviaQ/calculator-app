import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [sign, setSign] = useState(null);

  function plus(e) {
    setSign("+");
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    setSign("-");
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    setSign("×");
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    setSign("÷");
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    inputRef.current.value = "";
  }

  function resetResult(e) {
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator 🔢📏</h1>
        <p ref={resultRef}>{result}</p>
        <input pattern="[0-9]" ref={inputRef} type="number" placeholder="Type a number" />
        <p>{sign + inputRef.current.value}</p>
      </div>
      <div>
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </div>
    </div>
  );
}

export default App;
