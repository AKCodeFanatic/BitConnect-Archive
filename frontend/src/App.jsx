import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Language from './components/Language'
import Homepage from './pages/Homepage'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
          <Homepage />

    </>
      
  )
}

export default App