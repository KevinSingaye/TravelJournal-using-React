import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './Data'
import Header from './Header'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Header/>
    <Card/>
  
    </>
  )
}

export default App
