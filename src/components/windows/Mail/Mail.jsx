import React, { useState } from 'react';
import MacWindow from '../MacWindow';
import './Mail.css';

const Mail = ({ windowName, windowsState, setWindowsState, setIsAnyWindowMaximized }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        _gotcha: ''
    });

    const [status, setStatus] = useState('idle');
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = async (e) => {
        e.preventDefault();

        if (formData._gotcha) return;

        setStatus('sending');

        try {
            const response = await fetch("https://formspree.io/f/mpqjwljj", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            if (response.ok) {

                setStatus('success');
                setShowToast(true);

                setTimeout(() => {
                    setShowToast(false);
                    setWindowsState(prev => ({ ...prev, [windowName]: false }));
                    setStatus('idle');
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        _gotcha: ''
                    });
                }, 2500);

            } else {
                setStatus('error');
            }

        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <>
            <MacWindow elem="Contact me" windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState} setIsAnyWindowMaximized={setIsAnyWindowMaximized}>
                <div className="mail-container">

                    <form onSubmit={handleSend} className="mail-form">

                        {/* honeypot */}
                        <input
                            type="text"
                            name="_gotcha"
                            value={formData._gotcha}
                            onChange={handleChange}
                            style={{ display: "none" }}
                        />

                        <div className="form-group">
                            <label>To:</label>
                            <input type="text" value="Deepanshu Rajput" disabled className="recipient-input" />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject:"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group separator"></div>

                        <textarea
                            name="message"
                            placeholder="Type your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <div className="form-group separator"></div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email:"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name:"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mail-actions">
                            <button type="submit" className={`send-btn ${status}`} disabled={status === 'sending'}>
                                {status === 'idle' && "Send"}
                                {status === 'sending' && "Sending..."}
                                {status === 'success' && "Sent"}
                                {status === 'error' && "Retry"}
                            </button>
                        </div>

                    </form>

                </div>
            </MacWindow>

            {/* macOS toast */}
            {showToast && (
                <div className="mac-toast">
                    ✉️ Message Sent Successfully
                </div>
            )}
        </>
    );
};

export default Mail;
