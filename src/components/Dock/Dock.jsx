import React, { useState } from 'react'
import './Dock.css'
import { iconsList } from '../../data/dockData'
import DockIcon from './DockIcon'

const Dock = ({ windowsState, setWindowsState, isAnyWindowMaximized }) => {
  const [mouseX, setMouseX] = useState(null)
  const [showDock, setShowDock] = useState(true)

  const isAnyWindowOpen = Object.values(windowsState).some(Boolean)

  React.useEffect(() => {
    if (!isAnyWindowOpen) {
      setShowDock(true) // Always visible if no windows are open
      return
    }

    // Hide by default if any window is open (mimicking fullscreen/focus mode)
    setShowDock(false)

    const handleMouseMove = (e) => {
      // Show dock if cursor is in bottom 2% of screen
      if (e.clientY > window.innerHeight * 0.78) {
        setShowDock(true)
      } else {
        setShowDock(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isAnyWindowOpen])

  const toggleIcon = (id, rect) => {

    if (['github', 'note', 'pdf', 'spotify', 'cli', 'mail', 'calender'].includes(id)) {

      let key = id;
      if (id === 'pdf') key = 'resume';
      if (id === 'calender') key = 'certifications';
      window.dispatchEvent(new CustomEvent('dock-launch', {
        detail: { id: key, rect }
      }))

      setWindowsState(prev => {
        const isAlreadyOpen = prev[key]

        const cleared = Object.keys(prev).reduce((acc, k) => {
          acc[k] = false
          return acc
        }, {})

        if (isAlreadyOpen) return cleared
        return { ...cleared, [key]: true }
      })

      return
    }

    if (id === 'mail') {
      const email = "deepanshurajput2731@gmail.com";
      const subject = encodeURIComponent("Project Inquiry / Collaboration");
      const body = encodeURIComponent(`Hi Deepanshu,\n\nI checked out your portfolio and would like to connect regarding...\n\n[Please mention your requirements here]\n\nBest regards,`);

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailLink, "_blank");
    }

    if (id === 'linkedin') window.open("https://www.linkedin.com/in/deepanshu-rajput-72314728b", "_blank")
  }

  return (
    <>
      <div className={`dock-indicator ${!showDock && isAnyWindowMaximized ? 'visible' : ''}`}>
        <span></span>
      </div>

      <div
        className="icons"
        onMouseMove={(e) => setMouseX(e.clientX)}
        onMouseLeave={() => setMouseX(null)}
        style={{
          transform: showDock
            ? 'translateX(-50%) translateY(0)'
            : 'translateX(-50%) translateY(200%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth ease-out/in
          bottom: showDock ? '2%' : '0%' // Slightly adjust bottom if needed, but transform does the heavy lifting
        }}
      >
        {iconsList.map((icon) => {
          let key = icon.id
          if (icon.id === 'pdf') key = 'resume'
          if (icon.id === 'calender') key = 'certifications'
          const isRunning = windowsState?.[key]

          return (
            <DockIcon
              key={icon.id}
              icon={icon}
              mouseX={mouseX}
              isRunning={isRunning}
              toggleIcon={toggleIcon}
            />
          )
        })}
      </div>
    </>
  )
}

export default Dock
