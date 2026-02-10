import React, { useRef } from 'react'

const MAX_SCALE = 1.6
const SELECTED_SCALE = 1.25
const INFLUENCE_DISTANCE = 140

const DockIcon = ({ icon, mouseX, isRunning, toggleIcon }) => {
    const ref = useRef(null)

    let scale = 1
    let shiftX = 0
    let margin = 0

    if (mouseX !== null && ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const center = rect.left + rect.width / 2
        const distance = mouseX - center
        const absDistance = Math.abs(distance)

        const influence = Math.max(0, 1 - absDistance / INFLUENCE_DISTANCE)

        scale = 1 + (MAX_SCALE - 1) * influence
        shiftX = (scale - 1) * 14 * Math.sign(distance)

        /* neighbor spacing expansion */
        margin = 12 * influence
    }

    if (isRunning) scale = Math.max(scale, SELECTED_SCALE)

    const lift = (scale - 1) * 18

    return (
        <div
            ref={ref}
            className={`icon ${icon.id}`}
            data-tip={icon.title || icon.id}
            style={{
                marginLeft: `${margin}px`,
                marginRight: `${margin}px`,
                transform: `translateX(${shiftX}px) translateY(-${lift}%) scale(${scale})`
            }}
            onClick={() => toggleIcon(icon.id, ref.current.getBoundingClientRect())}
        >
            <img src={icon.src} alt="" />
            {isRunning && <span className="dot"></span>}
        </div>
    )
}

export default DockIcon
