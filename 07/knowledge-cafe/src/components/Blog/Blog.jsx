import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
    // console.log(blog);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        className='w-72'
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <FaBookmark onClick={() => handleBookMark(blog)} className='text-4xl m-auto mt-5' />
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className='flex justify-between'>
                        {
                            blog.hashtags.map(has => <p className='border m-2 p-2'>{has}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleMarkAsRead(blog)} className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;