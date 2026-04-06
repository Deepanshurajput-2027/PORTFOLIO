import React from 'react';

const MailFormFields = ({ formData, handleChange }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="recipientTo">To:</label>
                <input type="text" value="Deepanshu Rajput" disabled className="recipient-input" id="recipientTo" aria-describedby="recipientTo" />
            </div>

            <div className="form-group separator" aria-hidden="true"></div>

            <div className="form-group">
                <label htmlFor="emailCc">Cc:</label>
                <input
                    type="text"
                    name="email"
                    id="emailCc"
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
                <label className='from-input' htmlFor="senderName">From:</label>
                <input
                    type="text"
                    name="name"
                    id="senderName"
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
                <label className='sub-input' htmlFor="mailSubject">Subject:</label>
                <input
                    type="text"
                    name="subject"
                    id="mailSubject"
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
                name="message"
                id="messageBody"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
            />
        </>
    );
};

export default MailFormFields;