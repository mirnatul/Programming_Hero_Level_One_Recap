import React, { use } from 'react';

const UserDetailsToo = ({ userPromise }) => {
    const user = use(userPromise);
    const { name, username } = user;

    return (
        <div>
            <p><small>Name: {username}</small></p>
        </div>
    );
};

export default UserDetailsToo;