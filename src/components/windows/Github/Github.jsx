import React, { useLayoutEffect, useRef } from 'react'
import MacWindow from '../MacWindow'
import gsap from 'gsap'
import './Github.css'
import githubData from '../../../assets/github.json'

import GithubCard from './GithubCard'

const Github = ({ windowName, windowsState, setWindowsState, setIsAnyWindowMaximized }) => {

    const containerRef = useRef(null)

    useLayoutEffect(() => {
        if (!containerRef.current) return

        const cards = containerRef.current.querySelectorAll('.card')

        gsap.fromTo(cards,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all" // Important for hover effects to work after animation
            }
        )
    }, [])

    return (
        <MacWindow elem="Github" windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState} setIsAnyWindowMaximized={setIsAnyWindowMaximized}>
            <div className="cards" ref={containerRef}>
                {githubData.map((project) => {
                    return <GithubCard key={project.id} data={project} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github
