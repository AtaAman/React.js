import { createElement, useState } from 'react'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
  // let counter = 15;

  let addValue= () => {
    if(counter < 20){
      counter = counter + 1;
      setCount(counter)
    }
  }

  let removeValue= () => {
    if(counter > 0){
      counter = counter - 1;
      setCount(counter)
    }
  }

  return (
    <>
    <h1>Counter Using Hook</h1>
    <h3>Counter Value: {counter}</h3>
    <br />
    <button
    onClick={addValue}
    >Counter:{counter} Add +1</button>
    <br />
    <br />
    <button
    onClick={removeValue}
    >Counter:{counter} remove -1</button>
    <footer>
    <h2>hook:{counter}</h2>
    </footer>
    </>
  )
}

export default App
