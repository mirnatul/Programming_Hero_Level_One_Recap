import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmark, setBookmark] = useState([]);

  const handleBookMark = blog => {
    console.log(blog);
    // alert("clicked")
    setBookmark([...bookmark, blog])
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main flex">
        <div className="left-container w-[70%] text-center">

          <Blogs handleBookMark={handleBookMark}></Blogs>

        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time: 0</h1>
          <h2>Bookmark count: 0</h2>
        </div>
      </div>
    </>
  )
}

export default App
