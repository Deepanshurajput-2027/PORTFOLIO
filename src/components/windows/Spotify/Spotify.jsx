import React from 'react'
import MacWindow from '../MacWindow'
import "./Spotify.css"

const Spotify = ({ windowName, setWindowsState, setIsAnyWindowMaximized }) => {
    return (
        <MacWindow elem="Spotify" width='25%' height='40%' windowName={windowName} setWindowsState={setWindowsState} setIsAnyWindowMaximized={setIsAnyWindowMaximized}>
            <div className="spotify-window">
                <iframe
                    src="https://open.spotify.com/embed/playlist/3oJPJwAsM5GDZN4UVBQCmj?utm_source=generator&theme=0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="spotify"
                />
            </div>


        </MacWindow>
    )
}

export default Spotify