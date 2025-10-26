import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();



    console.log(users);
    return (
        <div>
            this is user page
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;