import React, { use } from 'react';


const Users = ({ usersPromise }) => {

    const users = use(usersPromise)
    console.log(users);

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }
        console.log(user);

        // post
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('new user from server', data);
            })
    }

    return (
        <div>

            <form onSubmit={handleAddUser}>
                <input name='name' type="text" />
                <br />
                <input name='email' type="email" />
                <br />
                <button>add user</button>
            </form>


            {
                users.map(user => <p>{user.name}</p>)
            }
        </div>
    );
};

export default Users;