import React, { useState } from 'react';
import './App.css';
import userData from './userData.js';
import User from './User';

function App() {
  const [users, setUsers] = useState(userData);
  const [filter, setFilter] = useState({
    name: '',
    sort: 'default',
  });


  const handleInputOnChange = (event) => {
    const { value } = event.target;
    const newState = {...filter, name: value}
    setFilter(newState)
    filterUsers();
  };
  const handleSortOnChange = (event) => {
    const { value } = event.target;
    const newState = {...filter, sort: value}
    setFilter(newState)
    filterUsers();
  };

  const filterUsers = () => {
    const nameToLowerCase = filter.name.toLowerCase();
    const sortValue = filter.sort;
    const newUsers = userData
      .filter((user) => user.name.toLocaleLowerCase().includes(nameToLowerCase))
      .sort((a, b) => (sortValue === 'asc' ? a.age - b.age : b.age - a.age));
    setUsers(newUsers)
  }



  return (
    <div className="container">
      <header className="header">
        <input
          type="text"
          placeholder="Enter name..."
          className="header_input"
          onChange={handleInputOnChange}
        />
        <select onChange={handleSortOnChange}>
          <option value="default">Default</option>
          <option value="asc">Asc</option>
          <option value="desk">Desk</option>
        </select>
      </header>
      <div className="users-list">
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
