import React from 'react';

const MailFormFields = ({ formData, handleChange }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="toRecipient">To:</label>
                <input
                    type="text"
                    id="toRecipient"
                    value="Deepanshu Rajput"
                    disabled
                    className="recipient-input"
                />
            </div>

            <div className="form-group separator" aria-hidden="true"></div>

            <div className="form-group">
                <label htmlFor="ccEmailInput">Cc:</label>
                <input
                    type="text"
                    id="ccEmailInput"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="headless-input"
                    aria-required="true"
                />
            </div>

            <div className="form-group separator" aria-hidden="true"></div>

            <div className="form-group">
                <label htmlFor="fromNameInput" className='from-input'>From:</label>
                <input
                    type="text"
                    id="fromNameInput"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="headless-input"
                    aria-required="true"
                />
            </div>

            <div className="form-group separator" aria-hidden="true"></div>

            <div className="form-group">
                <label htmlFor="subjectInput">Subject:</label>
                <input
                    type="text"
                    id="subjectInput"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="headless-input"
                    aria-required="true"
                />
            </div>

            <div className="form-group separator" aria-hidden="true"></div>

            <textarea
                id="messageBodyTextarea"
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message body"
                aria-required="true"
            />
        </>
    );
};

export default MailFormFields;
