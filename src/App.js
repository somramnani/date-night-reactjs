import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";

function App() {
  const [input, setInput] = useState("");

  const handleOnChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setInput(value);
    console.log(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <div className="App">
      <Searchbar
        input={input}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
}

export default App;
