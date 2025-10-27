import React, { Suspense, useEffect, useState } from 'react';
import Book from './Book';

const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data);
    //         })
    // }, [])

    // const bookPromise = fetch('booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-3xl text-center p-6 my-10'>Books</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;