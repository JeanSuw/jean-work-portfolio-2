/*
Creating a form for user to fill their contacts
*/

import React, { useState } from 'react';
import './style.css';

function Form() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [userName, setFirstName] = useState('');
  
    const handleInputChange = () => {
      return setFirstName(userName);
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // Alert the user their first and last name, clear the inputs
      alert(`Hello ${userName}`);
      setFirstName('');
      setLastName('');
    };
  
    return (
      <div>
        <p>
          Hello {firstName}
        </p>
        <form className="form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default Form;

