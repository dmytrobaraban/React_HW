import React from 'react';

const Modal = ({ handleCloseModal, user }) => {
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal_container">
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Gender: {user.gender}</li>
          <li>Phone: {user.phone}</li>
          <li>Gender: {user.gender}</li>
          <li>Company: {user.company}</li>
          <li>Email: {user.email}</li>
          <li>Address: {user.address}</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
