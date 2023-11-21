import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Results from "./components/Results/Results";

function App() {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const [format, setFormat] = useState("");
    const [loading, setLoading] = useState(false);


    const imageSearch = () => {
        setLoading(true);
        Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json`)
        .then(res => {
            setResults(res.data.results.slice(0,150));
            console.log(res.data.results);
        }).then(() => {
            setLoading(false);
        });
    };


  return (
    <div className="parallax">

        <div className="App">

            <div className="header">
                <h1>Search the Library of Congress</h1>

                <p>Powered by the <a href="https://libraryofcongress.github.io/data-exploration/" target="_blank" rel="noopener noreferrer">LOC API</a><br />
                No-frills portal to search the Library of Congress's collection.<br />
                Returns first 150 results, when available.<br />
                Search by a specific format.</p>
            </div>

            <div className="searchFormDiv">
                <form 
                    className="searchForm"
                    onSubmit={event => {
                        event.preventDefault();
                        imageSearch();
                    }}>

                    <h2>Enter a search term:</h2>
                    <input 
                        className="searchTerm"
                        title="Enter a search term"
                        value={query}
                        onChange={event => {
                            event.preventDefault();
                            setQuery(event.target.value);
                        }}
                    />
                    <br/>

                    <h2>Select media format</h2>
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
                    {loading === false &&
                        <button className="btn btn-primary">Submit</button>}
                    

                    {loading === true &&
                        <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span class="visually-hidden" role="status">Loading...</span>
                      </button>}
                    
                </form>
            </div>

            <div className="resultsDiv">
                {results.map((result, index) => {
                    return (
                            <Results
                                className="singleResult" 
                                key={index}
                                title={result.title}
                                description={result.description}
                                image={result.image_url[0]}
                                url={result.url}
                            />
                    )
                })}
            </div>

        </div>
        {/* end App */}

    </div>
    // end parallax
  );
}

export default App;
