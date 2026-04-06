import React from 'react';

const MailToolbar = ({ status }) => {
    let buttonAriaLabel = '';
    switch (status) {
        case 'idle':
            buttonAriaLabel = 'Send email';
            break;
        case 'sending':
            buttonAriaLabel = 'Sending email';
            break;
        case 'success':
            buttonAriaLabel = 'Email sent successfully';
            break;
        case 'error':
            buttonAriaLabel = 'Retry sending email';
            break;
        default:
            buttonAriaLabel = 'Send email'; // Fallback for unexpected status
    }

    return (
        <div className="mail-toolbar">
            <button
                type="submit"
                className={`send-rect-btn ${status}`}
                disabled={status === 'sending' || status === 'success'}
                aria-label={buttonAriaLabel}
            >
                {status === 'idle' && (
                    <>
                        <span>Send</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </>
                )}
                {status === 'sending' && (
                    <>
                        <span className="spinner" aria-hidden="true"></span>
                        <span>Sending...</span>
                    </>
                )}
                {status === 'success' && (
                    <>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
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
