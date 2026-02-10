import React from 'react'
import MacWindow from '../MacWindow'
import './Resume.css'

const Resume = ({ windowName, setWindowsState, setIsAnyWindowMaximized }) => {
  return (
    <MacWindow elem="Resume" windowName={windowName} setWindowsState={setWindowsState} setIsAnyWindowMaximized={setIsAnyWindowMaximized}>
      <div className="resume-window">
        <embed src="/Resume.pdf" frameborder="0"></embed>
      </div>
    </MacWindow>
  )
}

export default Resume
