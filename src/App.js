import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const [format, setFormat] = useState("");

    // useEffect(() => {
    //     Axios.get(`https://www.loc.gov/photos/?q=${query}&fo=json`)
    //     .then(res => {
    //         setResults(res.data.results[0]);
    //         // console.log(res.data);
    //         console.log(res.data.results[0]);
    //         // console.log(res.data.results.subject);
    //     });
    // }, []);

    const imageSearch = () => {
        Axios.get(`https://www.loc.gov/${format}/?q=${query}&fo=json`)
        .then(res => {
            setResults(res.data.results);
            console.log(res.data.results);
        });
    };


  return (
    <div className="App">

        <header>Library of Congress</header>

        <form
            className="searchForm"
            onSubmit={event => {
                event.preventDefault();
                imageSearch();
            }}>

            <input 
                value={query}
                onChange={event => {
                    event.preventDefault();
                    setQuery(event.target.value);
                }}
            />
            <br/>
            <select
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
  );
}

export default App;
