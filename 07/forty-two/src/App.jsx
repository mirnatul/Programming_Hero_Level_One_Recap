
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottless/Bottles'


const bottlesPromise = fetch("bottles.json")
  .then(res => res.json())


function App() {

  return (
    <>
      <h2>Buy awsome water bottle</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
