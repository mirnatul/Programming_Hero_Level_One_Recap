import React from 'react';
import Cousine from './Cousine';

const Uncle = () => {
    return (
        <div>
            <h3>uncle</h3>
            <section className='flex'>
                <Cousine name="rafsan"></Cousine>
                <Cousine name="japsha"></Cousine>
            </section>
        </div>
    );
};

export default Uncle;