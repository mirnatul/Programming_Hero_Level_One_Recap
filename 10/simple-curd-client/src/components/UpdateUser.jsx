import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();
    const navigate = useNavigate()

    console.log(user);

    const handleUpdateUser = e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email }
        console.log(updatedUser);

        // for same page update we need to filter out the previous element and then put the new element in the state manually

        // update user info in the db
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after update', data);
                if (data.modifiedCount) {
                    alert("updated successfully")
                }
            })
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