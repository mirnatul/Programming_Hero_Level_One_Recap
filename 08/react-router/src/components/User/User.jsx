import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    const userStyle = {
        border: '2px solid black',
        margin: '7px',
        padding: '7px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;