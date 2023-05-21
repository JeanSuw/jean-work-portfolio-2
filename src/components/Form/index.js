/*
Creating a form for user to fill their contacts.
This is for the contact page.
*/

import React, { useState } from 'react';
import './style.css';

function Form() {
    const [userName, setFirstName] = useState('');
  
    const handleInputChange = () => {
      return setFirstName(userName);
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // Alert the user their username, clear the inputs
      alert(`Hello ${userName}`);
      setFirstName('');
      setLastName('');
    };
  
    return (
      <div>
        <p>
          Hello {userName}
        </p>
        <form className="form">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Username"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default Form;

