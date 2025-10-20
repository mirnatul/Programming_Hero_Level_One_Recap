import React from 'react';

const PricingCard = ({ pricing }) => {
    // console.log(pricing);
    return (
        <div className='border bg-amber-200 rounded mx-2 p-4 flex flex-col'>
            {/* card header */}
            <div>
                <h1 className='text-4xl'>{pricing.name}</h1>
                <h4 className='text-xl'>{pricing.price}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-100 mt-8 p-4 flex-1'>
                <p>{pricing.description}</p>
                <ul className='list-disc list-inside'>
                    {
                        pricing.features.map(p => <li>{p}</li>)
                    }
                </ul>
            </div>
            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;