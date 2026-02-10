import React, { useState } from 'react';
import MacWindow from '../MacWindow';
import './Mail.css';

import MailToolbar from './components/MailToolbar';
import MailFormFields from './components/MailFormFields';

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

                        {/* Components */}
                        <MailToolbar status={status} />

                        <MailFormFields
                            formData={formData}
                            handleChange={handleChange}
                        />

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
