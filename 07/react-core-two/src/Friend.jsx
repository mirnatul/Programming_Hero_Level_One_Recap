import React from 'react';

const Friend = ({ friend }) => {
    console.log(friend);

    const { name, email } = friend;
    return (
        <div style={{ border: "2px solid black", margin: "10px", padding: "10px" }}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;