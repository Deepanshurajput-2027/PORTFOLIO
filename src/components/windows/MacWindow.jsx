import React, { useEffect, useRef, useState } from 'react'
import { Rnd } from 'react-rnd'
import './Window.css'

const MacWindow = ({ children, elem, width = "40vw", height = "40vh", windowName, windowsState, setWindowsState, setIsAnyWindowMaximized }) => {

    const windowRef = useRef(null)
    const [isMaximized, setIsMaximized] = useState(false)

    // Initial state for controlled Rnd
    const [rndState, setRndState] = useState({
        x: 300,
        y: 100,
        width: width,
        height: height
    })

    // Store previous state to restore after maximize
    const [prevRndState, setPrevRndState] = useState(null)

    useEffect(() => {

        const handler = (e) => {
            const { rect } = e.detail

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
        return () => {
            window.removeEventListener("dock-launch", handler)
            if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, false)
        }

    }, [])

    const toggleMaximize = () => {
        if (isMaximized) {
            // Restore to previous state
            setRndState(prevRndState)
            setIsMaximized(false)
            if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, false)
        } else {
            // Save current state and maximize
            setPrevRndState(rndState)
            setRndState({
                x: 0,
                y: 0,
                width: '100vw',
                height: '100vh' // Full screen
            })
            setIsMaximized(true)
            if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, true)
        }
    }

    const handleMinimize = () => {
        // Reset to initial state
        setIsMaximized(false)
        if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, false)

        setRndState({
            x: 300,
            y: 100,
            width: width,
            height: height
        })
    }

    return (
        <Rnd
            size={{ width: rndState.width, height: rndState.height }}
            position={{ x: rndState.x, y: rndState.y }}
            onDragStop={(e, d) => {
                if (!isMaximized) {
                    setRndState(prev => ({ ...prev, x: d.x, y: d.y }))
                }
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                if (!isMaximized) {
                    setRndState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    })
                }
            }}
            disableDragging={isMaximized}
            enableResizing={!isMaximized}
            minWidth={300}
            minHeight={200}
            bounds="window"
            style={{ zIndex: isMaximized ? 999 : 10 }} // Ensure minimized window is on top
        >
            <div ref={windowRef} className="window" style={{ height: '100%' }}>
                {/* Overriding height: 140% from css to ensure fit in Rnd */}

                <div className="nav">
                    <div className="dots">
                        <div onClick={() => {
                            setWindowsState(state => ({ ...state, [windowName]: false }))
                            if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, false)
                        }} className="nav-dot red"></div>
                        <div onClick={handleMinimize} className="nav-dot yellow"></div>
                        <div onClick={toggleMaximize} className="nav-dot green"></div>
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
