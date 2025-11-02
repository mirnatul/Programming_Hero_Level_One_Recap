import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <ul className='flex justify-center gap-10 my-10 text-2xl'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </ul>
        </nav>
    );
};

export default Header;