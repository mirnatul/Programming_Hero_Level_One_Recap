import React from 'react';
import Links from './Links';


const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" }
];


const NavBar = () => {
    return (
        <nav>

            <ul className='flex justify-around'>
                {
                    navLinks.map(route => <Links key={route.url} route={route}></Links>)
                }
            </ul>
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