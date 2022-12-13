import { useState } from 'react'
import './App.css'
import Clima from './components/Clima'
import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Dual app</h1>
      <div className="App" >
        <div className='contador'>
        <Contador/>
        </div>
        <div className='clima'>
        <Clima/>
        </div>
      </div>
    </div>
  )
}

export default App
