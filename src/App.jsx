import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

/*
TODO
center the cards
  - grid
edit location name
update share and learn more buttons
*/

function App() {
  const [input, setInput] = useState("");
  const [yelpData, setYelpData] = useState([]);

  const getData = () => {
    axios({
      method: "get",
      //TODO change to live link for deployment
      url: `http://localhost:8080/cors/${encodeURI(input)}`,
    }).then(function (response) {
      console.log(response.data);
      setYelpData(response.data.businesses);
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

  const clear = () => {
    setInput("");
  };

  useEffect(() => {
    console.log("THIS IS YELP DATA", yelpData);
  });

  return (
    <div className="App">
      <Navbar />
      <Searchbar
        input={input}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        clear={clear}
      />

      <div className="container">
        {yelpData.map((data) => {
          return (
            <div className="container">
              <div className="col">
                <Cards className="cards" data={data} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
