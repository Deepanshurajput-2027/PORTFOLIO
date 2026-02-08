import {useState} from 'react'
import './app.css'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import Github from './components/windows/Github/Github'
import Note from './components/windows/Note/Note'
import Resume from './components/windows/Resume/Resume'
import Spotify from './components/windows/Spotify/Spotify'
import Cli from './components/windows/Cli/Cli'

const App = () => {

    const [windowState,setWindowState]=useState({
      github:false,
      resume:false,
      note:false,
      cli:false,
      spotify:false
    })

  return (
    <main>
      <Nav />
      <Dock windowsState={windowState} setWindowsState={setWindowState}/>

      {windowState.github && <Github windowName='github' windowsState={windowState} setWindowsState={setWindowState}/>}
      {windowState.note && <Note windowName='note' windowsState={windowState} setWindowsState={setWindowState}/>}
      {windowState.resume && <Resume windowName='resume' windowsState={windowState} setWindowsState={setWindowState}/>}
      {windowState.spotify && <Spotify windowName='spotify' windowsState={windowState} setWindowsState={setWindowState}/>}
      {windowState.cli && <Cli windowName='cli' windowsState={windowState} setWindowsState={setWindowState}/>}
    </main>
  )
}

export default App
