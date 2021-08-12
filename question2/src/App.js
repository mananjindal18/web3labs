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
        const moviesResponse = response.data.data;
        setShowData(true);
        setData(moviesResponse)
       
        
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
            <p>My Response {data.length} </p>
           {data.map((item,index)=>(
             <p key={index}>{item.Title}</p>
           ))}
          </div>
        ) : <div>No response</div>}
      </div>
      <div>
      {/* <input type="text" value={yearAdd} onChange={handleYear} /> */}
        <button onClick={handleApi}>Get Data</button>
      </div>
    </div>
  );
}

export default App;
