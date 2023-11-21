import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Results from "./components/Results/Results";

function App() {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const [format, setFormat] = useState("");


    const imageSearch = () => {
        Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json`)
        .then(res => {
            setResults(res.data.results);
            console.log(res.data.results);
        });
    };


  return (
    <div className="App">

        <div className="header">
            <h1 className="masterTitle">Search the Library of Congress</h1>

            <p className="headerIntro">Powered by the <a href="https://libraryofcongress.github.io/data-exploration/" target="_blank">LOC API</a><br />
            No-frills portal to search the Library of Congress's collection.<br />
            Returns first 150 results, when available.<br />
            Search by either a specific format OR all formats.</p>
        </div>

        <div className="searchFormDiv">
            <form 
                title="Enter a search term"
                className="searchForm"
                onSubmit={event => {
                    event.preventDefault();
                    imageSearch();
                }}>

                <h2>Enter a search term:</h2>
                <input 
                    title="Select media format"
                    value={query}
                    onChange={event => {
                        event.preventDefault();
                        setQuery(event.target.value);
                    }}
                />
                <br/>

                <h2>Option 1: Select media format</h2>
                <select
                    title="Select media format"
                    className="formatDropdown"
                    value={format}
                    onChange={event => {
                        event.preventDefault();
                        setFormat(event.target.value);
                    }}>
                    <option>Select media format</option>
                    <option value="photos">Photos</option>
                    <option value="audio">Audio</option>
                    <option value="film-and-videos">Film/Videos</option>
                    <option value="newspapers">Newspapers</option>
                    <option value="maps">Maps</option>
                    <option value="manuscripts">Manuscripts</option>
                    <option value="websites">Websites</option>
                    <option value="notated-music">Printed Music</option>
                </select>
                <br/>
                <button>Submit</button>
            </form>
        </div>

        <br/>

        <div className="resultsDiv">
            {results.map((result, index) => {
                return (
                        <Results
                            className="singleResult" 
                            key={index}
                            title={result.title}
                            description={result.description}
                            image={result.image_url[0]}
                        />
                )
            })}
        </div>


    </div>
    // end App
  );
}

export default App;
