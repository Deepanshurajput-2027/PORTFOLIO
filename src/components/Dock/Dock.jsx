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

const Dock = () => {
  const [mouseX, setMouseX] = useState(null)
  const [selected, setSelected] = useState(null)

  const toggleSelect = (id) => {
    setSelected(prev => prev === id ? null : id)
  }

  return (
    <div
      className="icons"
      onMouseMove={(e)=>setMouseX(e.clientX)}
      onMouseLeave={()=>setMouseX(null)}
    >
      {iconsList.map((icon, index) => (
        <Icon
          key={icon.id}
          icon={icon}
          index={index}
          mouseX={mouseX}
          selected={selected}
          toggleSelect={toggleSelect}
        />
      ))}
    </div>
  )
}

const Icon = ({ icon, index, mouseX, selected, toggleSelect }) => {
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

    /* horizontal compensation to avoid overlap */
    shiftX = (scale - 1) * 10 * Math.sign(distance)
  }

  if (selected === icon.id) {
    scale = Math.max(scale, SELECTED_SCALE)
  }

  const lift = (scale - 1) * 15

  return (
    <div
      ref={ref}
      className={`icon ${icon.id} ${selected === icon.id ? 'active' : ''}`}
      style={{
        transform: `translateX(${shiftX}px) translateY(-${lift}%) scale(${scale})`
      }}
      onClick={() => toggleSelect(icon.id)}
    >
      <img src={icon.src} alt="" />
      <span className="dot"></span>
    </div>
  )
}

export default Dock
