import React from 'react';

const MailFormFields = ({ formData, handleChange }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="recipient-email">To:</label>
                <input type="text" id="recipient-email" value="Deepanshu Rajput" disabled className="recipient-input" />
            </div>

            <div className="form-group separator" aria-hidden="true"></div>

            <div className="form-group">
                <label htmlFor="cc-email">Cc:</label>
                <input
                    type="text"
                    id="cc-email"
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
                <label className='from-input' htmlFor="from-name">From:</label>
                <input
                    type="text"
                    id="from-name"
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
                <label className='sub-input' htmlFor="mail-subject">Subject:</label>
                <input
                    type="text"
                    id="mail-subject"
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

            <label htmlFor="messageBody" className="visually-hidden">Message content</label>
            <textarea
                id="messageBody"
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Mail message content"
            />
        </>
    );
};

export default MailFormFields;