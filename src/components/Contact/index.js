/*
Creating a form for user to fill their contacts.
This is for the contact page.
*/

import React, { useState } from 'react';
import validateEmail from '../../utils/helpers';

function Form() {
    const [formData, setFormData] = useState({
      userName: "",
      email: "",
      message: "",
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { userName, email, message } = formData;

    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      if (inputType === "email") {
        setFormData({...formData, [inputType]:inputValue});
      }else{
        alert("You didn't complete the form");
      }
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!validateEmail(email) || !userName) {
        setErrorMessage('Email or username is invalid');
        return;
        
      }
      
      alert(`Hello ${userName}`);

      setFormData({
        userName: "",
        email: "",
        message: "",
      });
      
    };

    return (
      <div>
        <p>Hello {userName}</p>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }
  
export default Form;