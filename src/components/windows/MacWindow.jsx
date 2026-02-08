import React, { useEffect, useRef } from 'react'
import { Rnd } from 'react-rnd'
import './Window.css'

const MacWindow = ({ children, elem, width = "40vw", height = "40vh", windowName, windowsState, setWindowsState }) => {

    const windowRef = useRef(null)
    const lastRectRef = useRef(null)

    useEffect(() => {

        const handler = (e) => {
            const { rect } = e.detail
            lastRectRef.current = rect

            const el = windowRef.current
            if (!el) return

            /* start at dock icon */
            el.style.transition = "none"
            el.style.transformOrigin = "top left"
            el.style.transform = `
                translate(${rect.left}px, ${rect.top}px)
                scale(0.2)
            `

            requestAnimationFrame(() => {
                el.style.transition = "all .35s cubic-bezier(.2,.9,.3,1)"
                el.style.transform = "translate(0px,0px) scale(1)"
                el.style.boxShadow = "0 20px 40px rgba(0,0,0,.35)"
            })
        }

        window.addEventListener("dock-launch", handler)
        return () => window.removeEventListener("dock-launch", handler)

    }, [])

    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}
        >
            <div ref={windowRef} className="window">

                <div className="nav">
                    <div className="dots">
                        <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="nav-dot red"></div>
                        <div className="nav-dot yellow"></div>
                        <div className="nav-dot green"></div>
                    </div>

                    <div className="title">
                        <p>deepanshurajput - zsh - {elem}</p>
                    </div>
                </div>

                <div className="main-content">{children}</div>

            </div>
        </Rnd>
    )
}

export default MacWindow
