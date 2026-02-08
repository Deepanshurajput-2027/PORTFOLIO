import React from 'react'
import { Rnd } from 'react-rnd'
import './Window.css'


const MacWindow = ({children,elem}) => {
  return (
    <Rnd
        default={{
            width:"40vw",
            height:"40vh",
            x:300,
            y:200
        }}
    >
        <div className="window">

            <div className="nav">
                <div className="dots">
                    <div className="nav-dot red"></div>
                    <div className="nav-dot yellow"></div>
                    <div className="nav-dot green"></div>
                </div>

                <div className="title"><p>deepanshurajput - zsh - {elem}</p></div>
            </div>

            <div className="main-content">{children}</div>

        </div>
    </Rnd>
  )
}

export default MacWindow
