import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      // Check if counter is less than 20 before incrementing
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      // Check if counter is greater than 0 before decrementing
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter} </button>
      <p>footer:{counter} </p>
    </>
  );
}

export default App;
