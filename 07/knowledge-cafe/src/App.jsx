import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = blog => {
    // console.log(blog);
    // alert("clicked")
    setBookmark([...bookmark, blog])
  }

  const handleMarkAsRead = (blog) => {
    // console.log(time);
    setReadingTime(readingTime + blog.reading_time)
    const newBookmarked = bookmark.filter(bmark => bmark.id !== blog.id)
    setBookmark(newBookmarked);
  }

  // console.log(bookmark);

  return (
    <>
      <Navbar></Navbar>

      <div className="main flex">
        <div className="left-container w-[70%] text-center">

          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>

        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time: {readingTime}</h1>
          <h2>Bookmark count: {bookmark.length}</h2>
          <br />

          {
            bookmark.map(marked => <p className='bg-red-600 text-white border m-2 p-2'>{marked.title}</p>)
          }
        </div>
      </div >
    </>
  )
}

export default App
