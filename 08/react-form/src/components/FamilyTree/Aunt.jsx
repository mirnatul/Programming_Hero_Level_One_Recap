import React from 'react';
import Cousine from './Cousine';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousine name="sweeny"></Cousine>
                <Cousine name="jojo"></Cousine>
            </section>
        </div>
    );
};

export default Aunt;