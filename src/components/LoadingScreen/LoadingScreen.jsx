import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [started, setStarted] = useState(false);

    // Refs for GSAP animation
    const wrapperRef = useRef(null);
    const outerRingRef = useRef(null);
    const innerRingRef = useRef(null);
    const coreRef = useRef(null);
    const containerRef = useRef(null);
    const audioRef = useRef(null);

    const handleStart = () => {
        if (started) return;

        // Play Sound
        const audio = new Audio('/startup.mp3');
        audio.volume = 1.0;
        audioRef.current = audio;
        audio.play().catch(() => { });

        // 1. Button Press Effect
        gsap.to(wrapperRef.current, {
            scale: 0.9,
            duration: 0.1,
            ease: "power2.out",
            onComplete: () => {
                // 2. Explosion / Expansion
                gsap.to(wrapperRef.current, {
                    scale: 30,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.inOut"
                });

                // 3. Fade out background elements
                gsap.to(".logo-fade-out", {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    stagger: 0.1
                });

                // 4. White flash overlay or container transition
                gsap.to(containerRef.current, {
                    backgroundColor: "#000",
                    duration: 1
                });
            }
        });

        // Delay specific for switching to 'Hello' screen logic
        // We keep the original timeout based flow but aligned with animation
        setTimeout(() => {
            setStarted(true);
        }, 1200);
    };

    useEffect(() => {
        // IDLE ANIMATIONS
        if (!started && outerRingRef.current) {
            // Outer Ring Rotation
            gsap.to(outerRingRef.current, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });

            // Inner Ring Counter-Rotation
            gsap.to(innerRingRef.current, {
                rotation: -360,
                duration: 15,
                repeat: -1,
                ease: "none"
            });

            // Core Pulse
            gsap.to(coreRef.current, {
                scale: 1.1,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }
    }, [started]);

    useEffect(() => {
        if (started) {
            const completeTimeout = setTimeout(() => {
                onComplete();
            }, 5500); // Wait for Mac Hello animation

            return () => {
                clearTimeout(completeTimeout);
            };
        }
    }, [started, onComplete]);

    return (
        <div className="loading-screen-container" ref={containerRef} onClick={handleStart}>

            {!started ? (
                <div className="power-intro-wrapper">

                    {/* Header Info */}
                    <div className="loader-header-left logo-fade-out">
                        <h1>DEEPANSHU RAJPUT</h1>
                        <p>WEB DEVELOPER & DESIGNER</p>
                    </div>

                    <div className="loader-header-right logo-fade-out">
                        <h2>PORTFOLIO V.2026</h2>
                        <p>UI/UX · CREATIVE · macOS</p>
                    </div>

                    {/* Footer Info */}
                    <div className="loader-footer logo-fade-out">
                        BOOTING SYSTEM... LOADING COMMANDS...
                    </div>

                    <div className="loader-bottom-left logo-fade-out">
                        <h3>SYSTEM INTEGRITY</h3>
                        <p>VERIFIED · SECURE</p>
                    </div>

                    <div className="loader-bottom-right logo-fade-out">
                        <h3>MEMORY: 100%</h3>
                        <p>LATENCY: 0ns</p>
                    </div>

                    <div className="corner corner-tl logo-fade-out"></div>
                    <div className="corner corner-tr logo-fade-out"></div>
                    <div className="corner corner-bl logo-fade-out"></div>
                    <div className="corner corner-br logo-fade-out"></div>

                    {/* GSAP POWER BUTTON */}
                    <div className="power-main-center">
                        <div className="power-button-wrapper" ref={wrapperRef}>
                            <div className="power-ring-outer" ref={outerRingRef}></div>
                            <div className="power-ring-inner" ref={innerRingRef}></div>
                            <div className="power-core" ref={coreRef}>
                                <svg
                                    className="power-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                    <line x1="12" y1="2" x2="12" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                        <p className="start-text logo-fade-out">Initialize System</p>
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
