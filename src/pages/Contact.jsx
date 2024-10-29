import { useState } from 'react';
// import './style.css'; // You can uncomment this if needed

// Helper functions
import { checkMessage, validateEmail } from '../utils/helpers';

function Contact() {
  // State variables
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); // Changed to lowercase
  const [message, setMessage] = useState(''); // Changed to lowercase
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set state based on input type
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue); // Use lowercase 'name'
    } else {
      setMessage(inputValue); // Use lowercase 'message'
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email and name
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }
    
    // Validate message
    if (!checkMessage(message)) {
      setErrorMessage('Message is required');
      return;
    }

    // Clear form fields if successful
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage(''); // Clear error message
  };

  return (
    <div className="container text-center">
      <h1 className="mb-4">Contact Me!</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <input
            value={name} // lowercase
            name="name" // lowercase
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div className="form-group mb-4">
          <textarea
            value={message} // lowercase
            name="message" // lowercase
            onChange={handleInputChange}
            placeholder="Message"
            className="form-control"
            rows="4"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {errorMessage && (
        <div className="mt-3">
          <p className="error-text text-danger">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
