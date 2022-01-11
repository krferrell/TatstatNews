import "./App.css";
import React, {useState} from "react";
var axios = require("axios").default;


function App() {

  const [news, setNews] = useState([]);

  const getData = () => {
    let options = {
      method: "GET",
      url: "http://localhost:8000/news",
    };

    axios
      .request(options)
      .then((response) => {
        setNews(response.data.value[0].body);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {news}
      </div>
    </div>
  );
}

export default App;
