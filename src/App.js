import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        Axios.get(`https://www.loc.gov/photos/?q=${query}&fo=json`)
        .then(res => {
            setResults(res.data.results[0]);
            // console.log(res.data);
            console.log(res.data.results[0]);
            // console.log(res.data.results.subject);
        });
    }, []);

    // /search/ input query
    // /format/ selection menu
        // maps
        // audio
        // photos
        // manuscripts
        // newspapers
        // film-and-videos
        // notated-music
        // websites


  return (
    <div className="App">

        <header>Library of Congress</header>

        {/* need to map */}
        {/* <div>
            <p><strong>Title: </strong>{results.title}</p>
            <img src={results.image_url} alt={results.subject}/>
            <p><strong>Description: </strong>{results.description}</p>
            <p><strong>Search term: </strong>{results.subject}</p>
            <p><strong>Link: </strong></p><a href={results.url} target="_blank" rel="noopener noreferrer">{results.url}</a>
        </div> */}

        <form>
            <input 
                value={query}
                onChange={event => {
                    event.preventDefault();
                    setQuery(event.target.value);
                }}
            />
            <br/>
            <select>

            </select>
            <br/>
            <button>Search</button>
        </form>

    </div>
  );
}

export default App;
