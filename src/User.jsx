import React from 'react';

const User = ({ user }) => {

  return (
    <div className="user">
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Balance: {user.balance}</p>
      <img src={user.picture} />
    </div>
  );
};

export default User;
