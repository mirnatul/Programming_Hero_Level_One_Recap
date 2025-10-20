import React from 'react';

const Links = ({ route }) => {
    return (
        <div>
            <li className='hover:bg-yellow-300 p-2'><a href={route.url}>{route.name}</a></li>
        </div>
    );
};

export default Links;