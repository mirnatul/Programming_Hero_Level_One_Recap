import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const singleBook = data.find(book => book.bookId == id)
    // console.log(data);
    // console.log(singleBook);
    const { bookName, image } = singleBook;
    return (
        <div className='mx-auto text-center'>
            book details: {id}
            <img className='w-64 block mx-auto' src={image} alt="" />
            <h2>{bookName}</h2>
            <button className='btn btn-success mr-4'>Raad</button>
            <button className='btn btn-primary'>WishList</button>
        </div>
    );
};

export default BookDetails;