
import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())


// using async await
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}


function App() {

  // why we call this inside app component
  const friendsPromise = fetchFriends();
  /**
    1. just write a simple fetch with json conversion
    2. wrap the data loading component under suspense
   */



  // const handleClick = (name) => {
  //   alert(`Hello, ${name}`)
  // }

  return (
    <>
      {/* <Users></Users> */}

      {/* friends */}
      <Suspense fallback={<h3>Friends are comming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>



      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      {/* <h1>Vite + React</h1>
      <Counter></Counter>
      <br />
      <br />
      <br />
      <button onClick={() => handleClick("Gigi")}>click me</button >
      <button onClick={() => handleClick("Gigi")}>click me</button >
      <button onClick={() => handleClick("Gigi")}>click me</button > */}

    </>
  )
}

export default App
