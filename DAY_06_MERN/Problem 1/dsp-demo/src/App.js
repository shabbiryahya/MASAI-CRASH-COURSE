import React, { useState } from 'react';

const UserProfile = ({ user }) => (
  <div>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <p>{user.bio}</p>
  </div>
);

const EditProfile = ({ user }) => (
  <div>
    <input defaultValue={user.name} />
    <input defaultValue={user.email} />
    <input defaultValue={user.bio} />
  </div>
);

const App = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer',
  });
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div>
      {isEditMode ? <EditProfile user={user} /> : <UserProfile user={user} />}
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? 'View Profile' : 'Edit Profile'}
      </button>
    </div>
  );
};

export default App;
