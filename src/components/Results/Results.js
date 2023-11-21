import React from 'react';
import "./Results.css";

const Results = (props) => {
    return (

        <content className="resultsContent">

            <strong>{props.title}</strong>
            <br/>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
            <br/>
            <p><a href={props.url} target="_blank" rel="noopener noreferrer">Learn more</a></p>
        </content>

    )
}

export default Results;