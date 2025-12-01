import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();

    console.log(user);

    const handleUpdateUser = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email }
        console.log(newUser);

        // for same page update we need to filter out the previous element and then put the new element in the state manually
    }


    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <div>
                    <input className='input' name='name' type="text" defaultValue={user.name} />
                    <br />
                    <input className='input' name='email' type="text" defaultValue={user.email} />
                    <br />
                    <br />
                    <input className='btn' value="Update User" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;