import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export const useWindowAnimations = ({
    windowName,
    setWindowsState,
    setIsAnyWindowMaximized,
    width,
    height,
    windowRef
}) => {
    // Initial state for controlled Rnd
    const [rndState, setRndState] = useState(() => {
        // Set responsive initial size
        const isMobile = window.innerWidth < 768
        return {
            x: isMobile ? 0 : 300,
            y: isMobile ? 50 : 100,
            width: isMobile ? '100vw' : width,
            height: isMobile ? '60vh' : height
        }
    })

    const [isMaximized, setIsMaximized] = useState(false)
    const [prevRndState, setPrevRndState] = useState(null)
    const launchOrigin = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            const { rect } = e.detail
            launchOrigin.current = rect

            // OPEN ANIMATION
            if (windowRef.current) {
                gsap.fromTo(windowRef.current,
                    {
                        x: rect.left - rndState.x,
                        y: rect.top - rndState.y,
                        scale: 0,
                        opacity: 0
                    },
                    {
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: "back.out(1.2)"
                    }
                )
            }
        }

        window.addEventListener("dock-launch", handler)

        // If no dock-launch event (e.g. reload or direct mount), simple fade in
        // Note: This runs on mount. If triggered by dock, 'dock-launch' fires slightly after or concurrently. 
        // Logic might need refinement but existing code had this.
        if (!launchOrigin.current) {
            gsap.fromTo(windowRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 })
        }

        return () => {
            window.removeEventListener("dock-launch", handler)
        }
    }, [])

    const animateClose = (callback) => {
        if (!windowRef.current) return callback()

        const target = launchOrigin.current || { left: window.innerWidth / 2, top: window.innerHeight }

        // Calculate relative position to animate "back to dock"
        const currentX = rndState.x
        const currentY = rndState.y

        const destX = target.left - currentX + (target.width / 2)
        const destY = target.top - currentY + (target.height / 2)

        gsap.to(windowRef.current, {
            x: destX,
            y: destY,
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
            onComplete: callback
        })
    }

    const handleClose = () => {
        animateClose(() => {
            setWindowsState(state => ({ ...state, [windowName]: false }))
            if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, false)
        })
    }

    const toggleMaximize = () => {
        if (isMaximized) {
            // Restore
            if (prevRndState) {
                gsap.to(windowRef.current, {
                    opacity: 0, duration: 0.15, onComplete: () => {
                        setRndState(prevRndState)
                        setIsMaximized(false)
                        if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, false)
                        gsap.to(windowRef.current, { opacity: 1, duration: 0.2 })
                    }
                })
            } else {
                setIsMaximized(false)
            }

        } else {
            // Maximize
            setPrevRndState(rndState)

            // Animate transition visual (simple fade out/in for smooth resize snap)
            gsap.to(windowRef.current, {
                opacity: 0, duration: 0.15, onComplete: () => {
                    setRndState({
                        x: 0,
                        y: 0,
                        width: '100vw',
                        height: '100vh'
                    })
                    setIsMaximized(true)
                    if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, true)
                    gsap.to(windowRef.current, { opacity: 1, duration: 0.2 })
                }
            })
        }
    }

    const handleMinimize = () => {
        const isMobile = window.innerWidth < 768
        const targetState = {
            x: isMobile ? 0 : 300,
            y: isMobile ? 50 : 100,
            width: isMobile ? '100vw' : width,
            height: isMobile ? '60vh' : height
        }

        gsap.to(windowRef.current, {
            scale: 0.95, opacity: 0, duration: 0.2, onComplete: () => {
                setRndState(targetState)
                setIsMaximized(false)
                if (setIsAnyWindowMaximized) setIsAnyWindowMaximized(windowName, false)

                gsap.to(windowRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" })
            }
        })
    }

    return {
        rndState,
        setRndState,
        isMaximized,
        handleClose,
        handleMinimize,
        toggleMaximize
    }
}
