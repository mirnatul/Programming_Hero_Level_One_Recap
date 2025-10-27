import React from 'react';
import bookImage from './../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex justify-around items-center gap-10 p-10 bg-slate-300'>
            <div>
                <h1 className='text-4xl mb-8'>Lorem, ipsum dolor sit amet </h1>
                <button className='btn btn-primary'>test button</button>
            </div>
            <div>
                <img className='' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;