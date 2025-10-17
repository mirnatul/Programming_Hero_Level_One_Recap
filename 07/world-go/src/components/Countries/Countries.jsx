import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log("country visited clicked", country);
        // console.log(visitedCountries);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    // console.log(countriesPromise);
    const countriesDB = use(countriesPromise);
    const countries = countriesDB.data
    // console.log(countries);
    return (
        <div>
            <h2>Travel countries</h2>
            <h3>Travel so far: {visitedCountries.length}</h3>
            <ol>
                {visitedCountries.map(country => <li>{country.name}</li>)}
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.name}
                        handleVisitedCountries={handleVisitedCountries}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;