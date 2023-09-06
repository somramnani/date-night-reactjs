import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");

  const getData = () => {
    axios({
      method: "get",
      //TODO change to live link
      url: `http://localhost:8080/cors/${encodeURI(input)}`,
    }).then(function (response) {
      console.log(response.data);
    });
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setInput(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    getData();
    console.log(input);
  };

  const clear = (event) => {
    setInput("");
  };

  return (
    <div className="App">
      <Searchbar
        input={input}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        clear={clear}
      />
    </div>
  );
}

export default App;
