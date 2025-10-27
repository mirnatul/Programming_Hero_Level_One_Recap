import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [readList, setReadList] = useState([]);

    const singleBook = data.find(book => book.bookId == id)
    // console.log(data);
    // console.log(singleBook);
    const { bookName, image } = singleBook;

    const handleMarkAsRead = id => {
        // store with id
        addToStoreDB(id);
    }

    const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages)

    return (
        <div className='mx-auto text-center my-10'>
            book details: {id}
            <img className='w-64 block mx-auto' src={image} alt="" />
            <h2>{bookName}</h2>
            <button onClick={() => handleMarkAsRead(id)} className='btn btn-success mr-4'>Mark as Read</button>
            <button className='btn btn-primary'>Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;