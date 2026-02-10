import React from 'react'
import MacWindow from '../MacWindow'
import './Github.css'
import githubData from '../../../assets/github.json'

import GithubCard from './GithubCard'

const Github = ({ windowName, windowsState, setWindowsState, setIsAnyWindowMaximized }) => {
    return (
        <MacWindow elem="Github" windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState} setIsAnyWindowMaximized={setIsAnyWindowMaximized}>
            <div className="cards">
                {githubData.map((project) => {
                    return <GithubCard key={project.id} data={project} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github
