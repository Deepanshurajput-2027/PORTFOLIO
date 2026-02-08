import React from 'react'
import './app.css'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import Github from './components/windows/Github'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      
    </main>
  )
}

export default App
