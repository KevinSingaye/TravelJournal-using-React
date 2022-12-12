import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './Data'
import Header from './Header'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
const cards = data.map(item => {
      return (
            <Card   key={item.id}
                {...item} />
        )
      })
  return (

    <>
    <Header/>
     <section className="cards-list">
            {cards}
            </section>
  
    </>
  )
}

export default App
