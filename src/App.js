import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        Axios.get(`https://www.loc.gov/search/?fo=json&q=cats`)
        .then(res => {
            setResults(res.data.results[0]);
            // console.log(res.data);
            console.log(res.data.results[0]);
        });
    }, []);



  return (
    <div className="App">

        <header>Library of Congress</header>

        <div>
            {/* need to map */}
            <p><strong>Title: </strong>{results.title}</p>
            <img src={results.image_url} alt={results.subject}/>
            <p><strong>Description: </strong>{results.description}</p>
            <p><strong>Search term: </strong>{results.subject}</p>
        </div>

    </div>
  );
}

export default App;
