import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const singleUser = useLoaderData();
    return (
        <div>
            <p>User details: {singleUser.id}</p>
        </div>
    );
};

export default UserDetails;