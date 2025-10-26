import React, { useState } from 'react';

const ControlledField = () => {
    // instant interactivity
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password);
    }


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }


    const handlePasswordOnChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError("Password must be at least 6 value")
        }
        else {
            setError('')
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleEmailChange}
                    defaultValue={email}
                    type="email" name="email" placeholder='email' required />
                <br />
                <input
                    onChange={handlePasswordOnChange}
                    type="password" name="password" placeholder='password'
                    defaultValue={password} required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default ControlledField;