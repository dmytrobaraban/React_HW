import React, { useState } from 'react';
import './App.css';
import userData from './userData.js';
import User from './User';
import Modal from './Modal';

function App() {
  const [users, setUsers] = useState(userData);
  const [filter, setFilter] = useState({
    name: '',
    sort: 'default',
  });
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalUser, setModalUser] = useState(null);

  const handleInputOnChange = (event) => {
    const { value } = event.target;
    const newState = { ...filter, name: value };
    setFilter(newState);
    filterUsers();
  };
  const handleSortOnChange = (event) => {
    const { value } = event.target;
    const newState = { ...filter, sort: value };
    setFilter(newState);
    filterUsers();
  };

  const filterUsers = () => {
    const nameToLowerCase = filter.name.toLowerCase();
    const sortValue = filter.sort;
    const newUsers = userData
      .filter((user) => user.name.toLocaleLowerCase().includes(nameToLowerCase))
      .sort((a, b) => (sortValue === 'asc' ? a.age - b.age : b.age - a.age));
    setUsers(newUsers);
  };

  const handleShowModal = (user) => {
    setIsShowModal(true);
    setModalUser(user);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
    setModalUser(null);
  };

  return (
    <div className="container">
      {isShowModal ? (
        <Modal handleCloseModal={handleCloseModal} user={modalUser} />
      ) : null}
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
          <User user={user} handleShowModal={() => handleShowModal(user)} />
        ))}
      </div>
    </div>
  );
}

export default App;
