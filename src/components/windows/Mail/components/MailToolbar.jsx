import React from 'react';

const MailToolbar = ({ status }) => {
    const getAriaLabel = (currentStatus) => {
        switch (currentStatus) {
            case 'idle':
                return 'Send email';
            case 'sending':
                return 'Sending email, please wait';
            case 'success':
                return 'Email sent successfully';
            case 'error':
                return 'Retry sending email';
            default:
                return 'Mail action button';
        }
    };

    return (
        <div className="mail-toolbar">
            <button
                type="submit"
                className={`send-rect-btn ${status}`}
                disabled={status === 'sending' || status === 'success'}
                aria-label={getAriaLabel(status)}
                role="button"
                tabIndex={0}
            >
                {status === 'idle' && (
                    <>
                        <span>Send</span>
                        <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
