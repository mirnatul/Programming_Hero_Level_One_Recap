import React from 'react';

const Country = ({ country }) => {
    const { name, flag } = country

    return (
        <div>
            <img style={{ width: "150px" }} src={flag} alt="" />
            <h4>Name: {name}</h4>
        </div>
    );
};

export default Country;