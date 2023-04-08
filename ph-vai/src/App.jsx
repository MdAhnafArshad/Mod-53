import { useState } from 'react'
import './App.css'
import Deshbord from './Component/Deshbord/Deshbord'
import Navbar from './Component/Navbar/Navbar'
import PhoneBar from './Component/phoneBar/PhoneBar'
import PriceList from './Component/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline text-purple-500">
        Hello teilween!
      </h1>
      <PriceList></PriceList>
      <Deshbord></Deshbord>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
