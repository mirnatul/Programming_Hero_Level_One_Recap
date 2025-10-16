
import './App.css'
import Counter from './Counter'

function App() {

  const handleClick = (name) => {
    alert(`Hello, ${name}`)
  }

  return (
    <>

      <h1>Vite + React</h1>
      <Counter></Counter>
      <br />
      <br />
      <br />
      <button onClick={() => handleClick("Gigi")}>click me</button >
      <button onClick={() => handleClick("Gigi")}>click me</button >
      <button onClick={() => handleClick("Gigi")}>click me</button >

    </>
  )
}

export default App
