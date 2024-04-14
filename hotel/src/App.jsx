import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Segundo from './Components/segundoo'
import Cuartos from './Components/cuartos'

function App() {

  return (
    <>
      <div className="navbar">
        <input type="checkbox" className="checkbox" id="click"/>
        <Sidebar/>
        <Nav/>
        <Header/>
        <Segundo/>
        <Cuartos/>

    </div>
    </>
  )
}

export default App
