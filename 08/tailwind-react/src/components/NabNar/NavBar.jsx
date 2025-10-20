import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';


const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" }
];


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navLinks.map(route => <Links key={route.url} route={route}></Links>)

    return (
        <nav className='flex justify-between mx-6 mt-4 text-xl'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden' /> : <Menu className='md:hidden' />
                }

                <ul className={`md:hidden absolute p-6 duration-1000 bg-white
                    ${open ? 'top-10' : '-top-44'}`}>
                    {links}
                </ul>


                <h1>My Navbar</h1>
            </span>

            <ul className='md:flex gap-6 hidden'>
                {
                    links
                }
            </ul>
            <button className='btn btn-soft'>Sign In</button>
            {/* <ul className='flex justify-around'>
                {
                    navLinks.map(route => <li><a href={route.url}>{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className='flex gap-8'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Avout</a></li>
                <li><a href="/">blog</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBar;