import React from 'react';

const MailToolbar = ({ status }) => {
    return (
        <div className="mail-toolbar">
            <button type="submit" className={`send-rect-btn ${status}`} disabled={status === 'sending' || status === 'success'}>
                {status === 'idle' && (
                    <>
                        <span>Send</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </>
                )}
                {status === 'sending' && (
                    <>
                        <span className="spinner"></span>
                        <span>Sending...</span>
                    </>
                )}
                {status === 'success' && (
                    <>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Sent</span>
                    </>
                )}
                {status === 'error' && "Retry"}
            </button>
        </div>
    );
};

export default MailToolbar;
