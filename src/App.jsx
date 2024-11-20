import iconR from './assets/react.svg'
import Header from './components/Header.jsx'
import {useState} from "react";
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    function addClick(){
       setCount(count +1)
    }

  return (
    <>
        <Header title="ReactJS"/>
       <img src={iconR} alt=""/>
      <h1>First App React js </h1>
        <button onClick={addClick}>ADD</button>
        <h2>{count}</h2>
    </>
  )
}

export default App
