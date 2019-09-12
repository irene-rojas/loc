import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        Axios.get(`https://www.loc.gov/search/?fo=json&q=baseball`)
        .then(res => {
            setResults(res.data.results[0]);
            // console.log(res.data);
            console.log(res.data.results[0].subject[0]);
        });
    }, []);



  return (
    <div className="App">

        <header>Library of Congress</header>

        <div>
            <p>{results.title}</p>
            <img src={results.image_url} alt={results.subject}/>
            <p>{results.description}</p>
            <p>Search term: {results.subject}</p>
        </div>

    </div>
  );
}

export default App;
