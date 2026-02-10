import React from 'react'
import MacWindow from '../MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.css"
import { commands, welcomeMessage } from '../../../data/cliData'

const Cli = ({ windowName, setWindowsState, setIsAnyWindowMaximized }) => {

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} setIsAnyWindowMaximized={setIsAnyWindowMaximized} elem="cli">
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'deepanshurajput:~$'}
                    promptLabelStyle={{ color: '#00ff90' }}
                    inputTextStyle={{ color: '#ffd500' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli
