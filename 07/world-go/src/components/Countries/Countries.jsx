import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    // console.log(countriesPromise);
    const countriesDB = use(countriesPromise);
    const countries = countriesDB.data
    // console.log(countries);
    return (
        <div>
            <h2>Travel countries</h2>
            <h3>Travel so far: </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.name} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;