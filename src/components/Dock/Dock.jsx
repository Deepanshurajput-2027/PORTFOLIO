import React, { useState, useRef } from 'react'
import './Dock.css'

const iconsList = [
  { id: 'github', src: '/doc-icons/github.svg' },
  { id: 'mail', src: '/doc-icons/mail.svg' },
  { id: 'link', src: '/doc-icons/link.svg' },
  { id: 'cli', src: '/doc-icons/cli.svg' },
  { id: 'calender', src: '/doc-icons/calender.svg' },
  { id: 'note', src: '/doc-icons/note.svg' },
  { id: 'pdf', src: '/doc-icons/pdf.svg' },
  { id: 'spotify', src: '/doc-icons/spotify.svg' },
]

const MAX_SCALE = 1.5
const SELECTED_SCALE = 1.25
const INFLUENCE_DISTANCE = 120

const Dock = ({ windowsState, setWindowsState }) => {
  const [mouseX, setMouseX] = useState(null)

  const toggleIcon = (id, rect) => {

    /* internal windows */
    if (['github','note','pdf','spotify','cli'].includes(id)) {

      const key = id === 'pdf' ? 'resume' : id

      /* send launch animation event */
      window.dispatchEvent(new CustomEvent('dock-launch', {
        detail: { id:key, rect }
      }))

      setWindowsState(prev => {
        const isAlreadyOpen = prev[key]

        const cleared = Object.keys(prev).reduce((acc,k)=>{
          acc[k] = false
          return acc
        },{})

        if (isAlreadyOpen) return cleared

        return { ...cleared, [key]: true }
      })

      return
    }

    /* external actions */
    if (id === 'mail') window.open("mailto:deepanshurajput2731@gmail.com","_blank")
    if (id === 'link') window.open("www.linkedin.com/in/deepanshu-rajput-72314728b","_blank")
    if (id === 'calender') window.open("https://calendar.google.com/","_blank")
  }

  return (
    <div
      className="icons"
      onMouseMove={(e)=>setMouseX(e.clientX)}
      onMouseLeave={()=>setMouseX(null)}
    >
      {iconsList.map((icon) => {
        const key = icon.id === 'pdf' ? 'resume' : icon.id
        const isRunning = windowsState?.[key]

        return (
          <Icon
            key={icon.id}
            icon={icon}
            mouseX={mouseX}
            isRunning={isRunning}
            toggleIcon={toggleIcon}
          />
        )
      })}
    </div>
  )
}

const Icon = ({ icon, mouseX, isRunning, toggleIcon }) => {
  const ref = useRef(null)

  let scale = 1
  let shiftX = 0

  if (mouseX !== null && ref.current) {
    const rect = ref.current.getBoundingClientRect()
    const center = rect.left + rect.width / 2
    const distance = mouseX - center
    const absDistance = Math.abs(distance)

    const influence = Math.max(0, 1 - absDistance / INFLUENCE_DISTANCE)
    scale = 1 + (MAX_SCALE - 1) * influence
    shiftX = (scale - 1) * 10 * Math.sign(distance)
  }

  if (isRunning) scale = Math.max(scale, SELECTED_SCALE)

  const lift = (scale - 1) * 15

  return (
    <div
      ref={ref}
      className={`icon ${icon.id}`}
      style={{
        transform: `translateX(${shiftX}px) translateY(-${lift}%) scale(${scale})`
      }}
      onClick={() => toggleIcon(icon.id, ref.current.getBoundingClientRect())}
    >
      <img src={icon.src} alt="" />
      {isRunning && <span className="dot"></span>}
    </div>
  )
}

export default Dock
