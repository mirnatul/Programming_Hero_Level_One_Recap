import React from 'react';
import Me from './Me';
import Brother from './Brother';
import Sis from './Sis';

const Dad = () => {
    return (
        <div>
            <h3>dad</h3>
            <section className='flex'>
                <Me></Me>
                <Brother></Brother>
                <Sis></Sis>
            </section>
        </div>
    );
};

export default Dad;