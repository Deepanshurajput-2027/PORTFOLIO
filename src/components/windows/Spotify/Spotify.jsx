import React from 'react'
import MacWindow from '../MacWindow'
import "./Spotify.css"

const Spotify = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow elem="Spotify" width='25%' height='35%' windowName={windowName} setWindowsState={setWindowsState}>
            <div className="spotify-window">
                <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/3oJPJwAsM5GDZN4UVBQCmj?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify