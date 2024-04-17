import React, { useState } from 'react';

function App() {
 

 
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const addContact = (event) => {
      event.preventDefault();
      setContacts(prevContacts => [...prevContacts, { id: prevContacts.length, name, email }]);
      setName('');
      setEmail('');
    };
  
    return (
      <div>
        <form onSubmit={addContact}>
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.email}
            </li>
          ))}
        </ul>
      </div>
    );
  
  

  
}

export default App;
