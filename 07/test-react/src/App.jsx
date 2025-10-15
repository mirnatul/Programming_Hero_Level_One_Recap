
import Actor from './Actor';
import './App.css'
import Todo from './Todo';

function App() {

  // const actors = ['ana de armas', 'sydney sweeney', 'subrina carpenter']
  const actors = [
    { id: 1, name: 'ana de armas', role: 'actor' },
    { id: 2, name: 'sydney sweeney', role: 'actor' },
    { id: 3, name: 'gigi hadid', role: 'model' },
  ]


  return (
    <>
      {/* <h1>React Core Component</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person> */}
      {/* <Todo task="Learn React" isDone={true}></Todo> */}

      {
        actors.map(actor => <Actor key={actor.id} actor={actor}></Actor>)
      }
    </>
  )
}

function Person() {
  const age = 18;
  const name = "Li"

  const personStyle = {
    color: 'red',
    fontSize: '24px'
  }

  return (
    <p style={personStyle}>Hello there, I am {name}. I am {age} years old.</p>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

export default App
