import React from 'react';

const MyBookings = () => {
    const page = 4;
    return (
        <div>
            {/* Wrong: Don't show the desired result */}
            <title>Bookings {page}</title>
            {/* Correct way */}
            <title>{`Bookings ${page}`}</title>
            bookings
        </div>
    );
};

export default MyBookings;