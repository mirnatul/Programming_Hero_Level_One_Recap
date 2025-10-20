import React from 'react';

const Links = ({ route }) => {
    return (
        <div>
            <li><a href={route.url}>{route.name}</a></li>
        </div>
    );
};

export default Links;