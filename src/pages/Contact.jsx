import { useState } from 'react';
import emailjs from 'emailjs-com';
import { checkMessage, validateEmail } from '../utils/helpers';

function Contact() {
 
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue); 
    } else {
      setMessage(inputValue); 
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }
  
    if (!checkMessage(message)) {
      setErrorMessage('Message is required');
      return;
    }
  
    const serviceId = 'service_d3flf3y';
    const templateId = 'template_ooc6v7x';
    const userId = '6RiBla8RwhQOD1LYs';
  
    emailjs
      .send(serviceId, templateId, { name, email, message }, userId)
      .then(
        () => {
          alert('Your message was sent!');
          setName('');
          setMessage('');
          setEmail('');
          setErrorMessage('');
        },
        (error) => {
          console.error(error);
          setErrorMessage('Failed to send message.');
        }
      );
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
