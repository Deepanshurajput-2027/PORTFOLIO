import { useEffect, useRef, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [started, setStarted] = useState(false);
    const [activateAnim, setActivateAnim] = useState(false);
    const audioRef = useRef(null);

    const handleStart = () => {
        if (started) return;

        setActivateAnim(true);

        setTimeout(() => {
            setStarted(true);
        }, 900); // ripple activation delay

        const audio = new Audio('/startup.mp3');
        audio.volume = 1.0;
        audioRef.current = audio;
    };

    useEffect(() => {
        if (started) {
            const soundTimeout = setTimeout(() => {
                audioRef.current?.play().catch(() => { });
            }, 4000);

            const completeTimeout = setTimeout(() => {
                onComplete();
            }, 6000);

            return () => {
                clearTimeout(soundTimeout);
                clearTimeout(completeTimeout);
            };
        }
    }, [started, onComplete]);

    return (
        <div className="loading-screen-container" onClick={handleStart}>

            {!started ? (
                <div className={`power-intro ${activateAnim ? 'activate' : ''}`}>

                    <div className="loader-header-left">
                        <h1>DEEPANSHU RAJPUT</h1>
                        <p>WEB DEVELOPER & DESIGNER</p>
                    </div>

                    <div className="loader-header-right">
                        <h2>PORTFOLIO V.2026</h2>
                        <p>UI/UX · CREATIVE · macOS</p>
                    </div>

                    <div className="loader-footer">
                        BOOTING SYSTEM... LOADING COMMANDS...
                    </div>

                    <div className="loader-bottom-left">
                        <h3>SYSTEM INTEGRITY</h3>
                        <p>VERIFIED · SECURE</p>
                    </div>

                    <div className="loader-bottom-right">
                        <h3>MEMORY: 100%</h3>
                        <p>LATENCY: 0ns</p>
                    </div>

                    <div className="corner corner-tl"></div>
                    <div className="corner corner-tr"></div>
                    <div className="corner corner-bl"></div>
                    <div className="corner corner-br"></div>

                    <div className="power-button-container">
                        <div className="activation-ripple"></div>

                        <svg
                            className="power-button-svg"
                            height="100"
                            viewBox="0 0 24 24"
                            width="100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                            <line x1="12" y1="2" x2="12" y2="12"></line>
                        </svg>

                        <p className="start-text">Initialize system</p>
                    </div>
                </div>
            ) : (
                <section className="intro">
                    <div className="macintosh">
                        <svg className="mac-hello animate-hello" viewBox="0 0 885 479">
                            <path className="st0" d="M17,301c0,0,78-63,107-124s32-125,29-143s-20-27-40,0c-6.1,8.2-49.9,73.3-45.5,165.5c7,148,1,175-13,224
                c-5,14,0,0,0,0s34-95,50-130c7-15,12-25,24.7-23.7c12.3,0.7,17.3,8.7,20.3,21.7c6,26-2,97,45,89c11.4-1.9,19-3,40-20
                c22.1-19.1,92.8-56,102-86c11-36-19-45-19-45s-36-17-58,49c-12.1,36.4-16,98,54,119c60.1,18,117.1-62.1,149.2-148.3
                c17.8-47.7,29.8-73.7,30.8-123.7c0.5-26.1-5.4-38.2-10.6-43.7c-4.9-5.1-16.9-9.8-29.4,5.7c-74,92-44,291-37,303
                c0,0,17.7,59.8,79.9,15.9c35.7-25.2,85.8-97.4,108.1-165.9c15-46,18.5-85,19-101c1-30-8.4-45.2-13.6-50.7
                c-4.9-5.1-16.4-9.3-29.4,5.7c-16.5,19.1-64.8,77.1-43,278c10.3,50.4,35.5,59.7,57.6,56.2c0,0,39.4-3.2,52.4-42.2
                c41.8-125.4,127-84,129-77c-76-56-180,95-74,149c83,36,137-146,68-142s37,145,101,56" />
                        </svg>
                    </div>
                </section>
            )}
        </div>
    );
};

export default LoadingScreen;
