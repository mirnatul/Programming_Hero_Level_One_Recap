import React, { use, useState } from 'react';
import { Link } from 'react-router';

const Users = ({ usersPromise }) => {

    const initialUsers = use(usersPromise)
    console.log(initialUsers);
    const [users, setUsers] = useState(initialUsers)

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email }
        console.log(newUser);

        // create user in the database
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Data after creating in the db", data);
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser];
                    setUsers(newUsers)
                    alert('user added successfully')
                    e.target.reset();
                }
            })
    }

    const handleUserDelete = (id) => {
        console.log("delete");
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    console.log('after delete', data);
                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers)
                }
            })
    }


    return (
        <div>
            <form onSubmit={handleAddUser}>
                <div>
                    <input className='input' name='name' type="text" />
                    <br />
                    <input className='input' name='email' type="text" />
                    <br />
                    <br />
                    <input className='btn' value="Add User" type="submit" />
                </div>
            </form>
            {/* view user */}
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}: {user.email}
                        <Link className='btn btn-primary mx-2' to={`/users/${user._id}`}>Details</Link>
                        <Link className='btn btn-secondary mx-2 my-2' to={`/update/${user._id}`}>Update</Link>
                        <button onClick={() => handleUserDelete(user._id)} className='btn'>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;