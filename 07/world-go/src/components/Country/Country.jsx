import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);
    const { name, flag, area, population } = country;

    // console.log(typeof area);

    const handleVisited = () => {
        // alert("visited")
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img style={{ width: "150px" }} src={flag} alt="" />
            <h4 style={{ fontSize: "18px" }}>{name.toUpperCase()}</h4>
            <p>Area: {area.toLocaleString()}</p>
            <p>Population: {population.toLocaleString()}</p>
            <button
                className={visited ? 'btn-visited' : 'btn-not-visited'}
                onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;