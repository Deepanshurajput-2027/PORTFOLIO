import { useState } from 'react'
import './app.css'
import Dock from './components/Dock/Dock'
import Nav from './components/Nav/Nav'
import Github from './components/windows/Github/Github'
import Note from './components/windows/Note/Note'
import Resume from './components/windows/Resume/Resume'
import Spotify from './components/windows/Spotify/Spotify'
import Cli from './components/windows/Cli/Cli'
import Mail from './components/windows/Mail/Mail'
import Certifications from './components/windows/Certifications/Certifications'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [maximizedWindows, setMaximizedWindows] = useState([])
  const isAnyWindowMaximized = maximizedWindows.length > 0

  const handleWindowMaximize = (id, isMax) => {
    setMaximizedWindows(prev => {
      if (isMax) {
        return prev.includes(id) ? prev : [...prev, id]
      } else {
        return prev.filter(w => w !== id)
      }
    })
  }

  const [windowState, setWindowState] = useState({
    github: false,
    resume: false,
    note: false,
    cli: false,
    spotify: false,
    mail: false,
    certifications: false
  })

  return (
    <main>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <div className="profile-container">
            <h1 className="profile-title">Deepanshu Rajput</h1>
            <p className="profile-subtitle">Front-end Developer</p>
            <p className="profile-subtitle">React.js | Express.js | MongoDB</p>
          </div>
          <Nav />
          <Dock windowsState={windowState} setWindowsState={setWindowState} isAnyWindowMaximized={isAnyWindowMaximized} />

          {windowState.github && <Github windowName='github' windowsState={windowState} setWindowsState={setWindowState} setIsAnyWindowMaximized={handleWindowMaximize} />}
          {windowState.note && <Note windowName='note' windowsState={windowState} setWindowsState={setWindowState} setIsAnyWindowMaximized={handleWindowMaximize} />}
          {windowState.resume && <Resume windowName='resume' windowsState={windowState} setWindowsState={setWindowState} setIsAnyWindowMaximized={handleWindowMaximize} />}
          {windowState.spotify && <Spotify windowName='spotify' windowsState={windowState} setWindowsState={setWindowState} setIsAnyWindowMaximized={handleWindowMaximize} />}
          {windowState.cli && <Cli windowName='cli' windowsState={windowState} setWindowsState={setWindowState} setIsAnyWindowMaximized={handleWindowMaximize} />}
          {windowState.mail && <Mail windowName='mail' windowsState={windowState} setWindowsState={setWindowState} setIsAnyWindowMaximized={handleWindowMaximize} />}
          {windowState.certifications && <Certifications windowName='certifications' windowsState={windowState} setWindowsState={setWindowState} setIsAnyWindowMaximized={handleWindowMaximize} />}
        </>
      )}
    </main>
  )
}

export default App
