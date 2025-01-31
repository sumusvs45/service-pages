
import React, { useState, Fragment } from "react";
import '../Dialogbox/dialogbox.css'

const Dialougebox = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !message) {
      setError("All fields are required!");
      return;
    }

    // Simulating form submission
    console.log("Form submitted:", { email, message });

    // Reset form after submission
    setEmail("");
    setMessage("");
    setError("");
  };
  return (
    <Fragment>
      <div>
        <h3 className="services">One stop sollution for all your needs</h3>
      </div>

      <div className="dialog-box-container">
        <h2 className="dialog-box-header">
          Have questions or need assistance with our electronic products?
        </h2>
        <h2 className="dialog-box-description">
          Feel free to contact us! Our team is ready to assist you with any
          inquiries.
        </h2>
        <form onSubmit={handleFormSubmit} className="dialog-form">
          <div className="dialog-form-left">
            <div className="dialog-form-group">
              <label htmlFor="email" className="dialog-form-label">
                Get a mail from us:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="dialog-form-input"
                required
              />
            </div>
          </div>

          <div className="dialog-form-right">
            <div className="contact-details">
              <h3>Contact Details</h3>
              <h4>Email: info@sreesaielectronics.co.in</h4>
              <h4>Phone: +91 7569299875</h4>
              <h4>Address: 2/7, Brodipet, Near Sivalayam, Guntur - 522002</h4>
            </div>
          </div>

          {error && <p className="dialog-error-message">{error}</p>}
          <button type="submit" className="dialog-submit-button">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Dialougebox;
