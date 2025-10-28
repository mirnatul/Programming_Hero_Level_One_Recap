import React from 'react';
import { FcInfo } from "react-icons/fc";
import { NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center py-4'>
                <div className='flex items-center'>
                    <FcInfo className='text-5xl mr-2' /> <span className='text-3xl font-semibold'>Phudu</span>
                </div>
                <ul className='md:flex gap-8 hidden text-slate-600'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/my-bookings'>My-Bookings</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </ul>
                <div>
                    <button className='btn bg-sky-700 px-10 py-6 text-white rounded-3xl'>Emergency</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;