import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  const handleApi = (year) => {
    console.log("get api");
    axios.get("https://jsonmock.hackerrank.com/api/movies?Year="+year)
      .then((response) => {
        //console.log(response.data.data);
        //let movieArray = [];
        const moviesResponse = response.data.data;
        if (moviesResponse && moviesResponse.length > 0) {
          moviesResponse.map((a) => {
            //console.log("a",a);
            var movieArray=[];
            movieArray.push(a);
            setShowData(true);
            //console.log("movie Array", movieArray);
        setData(movieArray);
          });
        }
        
      });
  };
  
  useEffect(() => {
    handleApi('2012');
  }, [showData, setData]);
  return (
    <div className="App">
      <div>
        {showData ? (
          <div>
            <p>My Response </p>
            {data.map((item, index) => {
              <div key={index}>
                <p>{index}</p>
                <p>My Response </p>
                <h1>{JSON.stringify(item)}</h1>
              </div>
            })}
          </div>
        ) : <div>No response</div>}
      </div>
      <div>
        <button onClick={handleApi}>Get Data</button>
      </div>
    </div>
  );
}

export default App;
