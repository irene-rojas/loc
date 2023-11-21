import React from 'react';
import "./Results.css";

const Results = (props) => {
    return (

        <div className="resultsContent card">

            <strong>{props.title}</strong>
            <br/>
            <img src={props.image} alt={props.title} />
            <p>{props.description}</p>
            <br/>
            <p><a href={props.url} target="_blank" rel="noopener noreferrer">Learn more</a></p>
        </div>

    )
}

export default Results;