import React from 'react';

const Actor = ({ actor }) => {
    // console.log(props);
    const { name, role } = actor;
    return (
        <div>
            <p>{name.toUpperCase()}: {role}</p>
        </div>
    );
};

export default Actor;