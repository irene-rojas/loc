import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        Axios.get(`https://www.loc.gov/photos/?q=civil war&fo=json`)
        .then(res => {
            setResults(res.data.results[0]);
            // console.log(res.data);
            console.log(res.data.results[0]);
            console.log(res.data.results.subject);
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
            <p><strong>Link: </strong></p><a href={results.url} target="_blank" rel="noopener noreferrer">{results.url}</a>
        </div>

    </div>
  );
}

export default App;
