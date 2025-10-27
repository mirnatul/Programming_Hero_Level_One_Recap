import React from 'react';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // console.log(singleBook);
    const { bookId, author, bookName, category, image, publisher, rating, review, totalPages, yearOfPublishing } = singleBook;
    return (
        <Link to={`/book-details/${bookId}`}>
            <div className="card bg-base-100 shadow-sm border p-6">
                <figure className='p-3 bg-green-100'>
                    <img
                        className='h-64'
                        src={image}
                        alt="Books" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;