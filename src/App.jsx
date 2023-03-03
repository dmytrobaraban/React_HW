import React, { useState, useEffect } from 'react';
import './App.css';
import userData from './userData.js';
import User from './User';
import Modal from './Modal';
import Header from './Header';

function App() {
  const [users, setUsers] = useState(userData);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalUser, setModalUser] = useState(null);
  const [filter, setFilter] = useState({
    name: '',
    sort: 'default',
  });

  useEffect(() => {
    const nameToLowerCase = filter.name.toLowerCase();
    const sortValue = filter.sort;
    const newUsers = userData
      .filter((user) => user.name.toLocaleLowerCase().includes(nameToLowerCase))
      .sort((a, b) => (sortValue === 'desc' ? a.age - b.age : b.age - a.age));
    setUsers(newUsers);
  }, [filter]);

  useEffect(() => {
    if (!isShowModal) {
      setModalUser(null);
    }
  }, [isShowModal]);

  const handleInputOnChange = (event) => {
    const { value } = event.target;
    const newState = { ...filter, name: value };
    setFilter(newState);
  };
  const handleSortOnChange = (event) => {
    const { value } = event.target;
    const newState = { ...filter, sort: value };
    setFilter(newState);
  };

  const handleShowModal = (user) => {
    setIsShowModal(true);
    setModalUser(user);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className="container">
      {isShowModal ? (
        <Modal handleCloseModal={handleCloseModal} user={modalUser} />
      ) : null}
      <Header
        handleInputOnChange={handleInputOnChange}
        handleSortOnChange={handleSortOnChange}
      />
      <div className="users-list">
        {users.map((user) => (
          <User user={user} handleShowModal={() => handleShowModal(user)} />
        ))}
      </div>
    </div>
  );
}

export default App;
