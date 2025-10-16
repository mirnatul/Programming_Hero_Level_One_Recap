import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    // console.log(countriesPromise);
    const countriesDB = use(countriesPromise);
    const countries = countriesDB.data
    // console.log(countries);
    return (
        <div>
            <h2>Travel countries</h2>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;