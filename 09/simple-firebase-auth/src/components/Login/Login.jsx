import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("signout completed");
                setUser(null);
            })
            .catch((error) => { console.log(error); })
    }


    return (
        <div>
            <h2>Login</h2>
            <br />
            <button
                onClick={handleGoogleSignIn}
                className='btn btn-primary'>Sign in with google</button>
            <button
                onClick={handleSignOut}
                className='btn btn-secondary mx-2'>Sign Out</button>

            {
                user && <div>
                    <h3>{user?.displayName}</h3>
                    <h3>{user?.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;