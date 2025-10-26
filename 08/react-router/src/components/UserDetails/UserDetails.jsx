import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    const navigate = useNavigate();
    const singleUser = useLoaderData();

    const params = useParams();
    console.log(params); // show as object
    // 
    const { userId } = useParams();


    return (
        <div>
            <p>User details: {singleUser.id}</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default UserDetails;