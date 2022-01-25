import "./App.css";
import React, {useState, useEffect} from "react";
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
        // setNews(response.data.value);
        console.log(response)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const cleanData = (newsArray) => {
    
  //   const filteredArray = newsArray?.filter((article)=>{
  //   let result = article.body.includes("Link") || article.body.includes("Ruiz");
  //   if(!result) return article;
  //   });
  //   console.log(filteredArray);
  // };

  useEffect(()=>{
    getData();
  }, [])

  return (
    <div>
      <button
      // onClick={() => cleanData(news)}
      >
        Click Me
      </button>
    </div>
  );
  }

export default App;
