import React from 'react'
import MacWindow from '../MacWindow'
import './Certifications.css'
import certificationsData from '../../../data/certifications.json'

const Certifications = ({ windowName, windowsState, setWindowsState, setIsAnyWindowMaximized }) => {
    return (
        <MacWindow
            elem="Certifications"
            windowName={windowName}
            windowsState={windowsState}
            setWindowsState={setWindowsState}
            setIsAnyWindowMaximized={setIsAnyWindowMaximized}
        >
            <div className="cert-grid">
                {certificationsData.map((cert) => (
                    <div key={cert.id} className="cert-card">
                        <div className="cert-header">
                            <div className="cert-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15L8.5 17L9.5 13L6.5 10.5L10.5 10.2L12 6.5L13.5 10.2L17.5 10.5L14.5 13L15.5 17L12 15Z" fill="currentColor" opacity="0.8" />
                                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.5 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>{cert.title}</h3>
                        </div>
                        <div className="cert-body">
                            <p>{cert.description}</p>
                            <div className="cert-tags">
                                {cert.tags.map((tag, i) => (
                                    <span key={i} className="cert-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="cert-footer">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                View Certificate
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </MacWindow>
    )
}

export default Certifications
