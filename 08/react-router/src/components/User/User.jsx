import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import UserDetails from '../UserDetails/UserDetails';
import UserDetailsToo from '../UserDetailsToo/UserDetailsToo';

const User = ({ user }) => {

    const [showInfo, setShowInfo] = useState(false);

    const [visitHome, setVisitHome] = useState(false);

    const location = useLocation();
    console.log(location);



    const { id, name, email, phone } = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/users/${id}`)
    }

    const userStyle = {
        border: '2px solid black',
        margin: '7px',
        padding: '7px'
    }

    if (visitHome) {
        return <Navigate to="/"></Navigate>
    }


    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <Link to={`/users/${id}`}>Show Details</Link>

            <button onClick={() => handleNavigate(id)}>Details of: {id}</button>

            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show info'} info</button>

            {showInfo && <Suspense fallback={<span>Loading...</span>}>
                <UserDetailsToo userPromise={userPromise}></UserDetailsToo>
            </Suspense>}

            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;