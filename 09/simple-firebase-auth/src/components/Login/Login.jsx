import React from 'react';

const Login = () => {

    const handleGoogleSignIn = () => {
        alert("Google sign in");
    }
    return (
        <div>
            <h2>Login</h2>
            <br />
            <button
                onClick={handleGoogleSignIn}
                className='btn btn-primary'>Sign in with google</button>
        </div>
    );
};

export default Login;