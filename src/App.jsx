import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-11/12 mx-auto'>
      <Header/>
      <Blogs/>
    </div>
  )
}

export default App
