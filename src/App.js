import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        Axios.get(`https://www.loc.gov/search/?fo=json&q=baseball`)
        .then(res => {
            setResults(res.data.results[0].description[0]);
            // console.log(res.data);
            // console.log(res.data.facet_trail[0].value);
            // console.log(res.data.results);
            console.log(res.data.results[0].description[0]);
        });
    }, []);



  return (
    <div className="App">

        <header>Library of Congress</header>

        <div>
            {/* <img src="http://www.loc.gov/static/exhibitions/baseball-americana/155_155.jpg"/> */}
            <p>{results}</p>

        </div>

    </div>
  );
}

export default App;
