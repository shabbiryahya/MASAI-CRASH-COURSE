import React, { useState, useRef } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', emailRef.current.value);
  };

  const isNameValid = name.length >= 3;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {!isNameValid && <p>Name must be at least 3 characters long</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          ref={emailRef}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
