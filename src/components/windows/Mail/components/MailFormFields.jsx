import React from 'react';

const MailFormFields = ({ formData, handleChange }) => {
    return (
        <>
            <div className="form-group">
                <label>To:</label>
                <input type="text" value="Deepanshu Rajput" disabled className="recipient-input" />
            </div>

            <div className="form-group separator"></div>

            <div className="form-group">
                <label>Cc:</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="headless-input"
                />
            </div>

            <div className="form-group separator"></div>

            <div className="form-group">
                <label className='from-input'>From:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="headless-input"
                />
            </div>

            <div className="form-group separator"></div>

            <div className="form-group">
                <label className='sub-input'>Subject:</label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="headless-input"
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
        </>
    );
};

export default MailFormFields;
