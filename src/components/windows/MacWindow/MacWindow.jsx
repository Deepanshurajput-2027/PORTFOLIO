import React, { useRef } from 'react'
import { Rnd } from 'react-rnd'
import '../Window.css' // Import shared styles
import WindowHeader from './components/WindowHeader'
import { useWindowAnimations } from './hooks/useWindowAnimations'

const MacWindow = ({ children, elem, width = "40vw", height = "40vh", windowName, setWindowsState, setIsAnyWindowMaximized }) => {

    const windowRef = useRef(null)
    const rndRef = useRef(null)

    // Using custom hook for animations and state
    const {
        rndState,
        setRndState,
        isMaximized,
        handleClose,
        handleMinimize,
        toggleMaximize
    } = useWindowAnimations({
        windowName,
        setWindowsState,
        setIsAnyWindowMaximized,
        width,
        height,
        windowRef
    })

    return (
        <Rnd
            ref={rndRef}
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
            style={{ zIndex: isMaximized ? 999 : 10 }}
            className="rnd-window-container"
        >
            <div ref={windowRef} className="window" style={{ height: '100%', width: '100%' }}>

                <WindowHeader
                    elem={elem}
                    handleClose={handleClose}
                    handleMinimize={handleMinimize}
                    toggleMaximize={toggleMaximize}
                />

                <div className="main-content">{children}</div>

            </div>
        </Rnd>
    )
}

export default MacWindow
