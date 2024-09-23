import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Card from "./components/Card"; // Capitalized Card

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "thyagaraj",
    age: 41,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="chairaurcode" btnText="click me" /> Capitalized Card
      <Card username="Homedesignhub" btnText="visit me" />
    </>
  );
}

export default App;
