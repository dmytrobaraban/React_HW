import React, { useContext, useState } from 'react';
import { RegistrationContext } from '../../containers/RegistrationForm';
import './style.css';

const InputName = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <input
      type="text"
      value={state.firstName}
      onChange={(e) => handleFieldChange('firstName', e.target.value)}
    />
  );
};

const InputLastName = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <input
      type="text"
      value={state.lastName}
      onChange={(e) => handleFieldChange('lastName', e.target.value)}
    />
  );
};

const InputEmail = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <input
      type="email"
      value={state.email}
      onChange={(e) => handleFieldChange('email', e.target.value)}
    />
  );
};

const InputCity = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <input
      type="text"
      value={state.city}
      onChange={(e) => handleFieldChange('city', e.target.value)}
    />
  );
};

const InputStreet = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <input
      type="text"
      value={state.street}
      onChange={(e) => handleFieldChange('street', e.target.value)}
    />
  );
};

const InputHouse = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <input
      type="text"
      value={state.house}
      onChange={(e) => handleFieldChange('house', e.target.value)}
    />
  );
};

const InputPhoto = () => {
  const { handleFieldChange } = useContext(RegistrationContext);
  return (
    <>
      <input
        type="file"
        id="file"
        onChange={(e) => handleFieldChange('photo', e.target.files[0])}
      />
      <label htmlFor="file">Upload Photo</label>
    </>
  );
};

const InputPassword = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <input
      type="password"
      value={state.password}
      onChange={(e) => handleFieldChange('password', e.target.value)}
    />
  );
};

const InputConfirm = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <input
      type="password"
      value={state.confirm}
      onChange={(e) => handleFieldChange('confirm', e.target.value)}
    />
  );
};

export {
  InputName,
  InputLastName,
  InputEmail,
  InputCity,
  InputStreet,
  InputHouse,
  InputPhoto,
  InputPassword,
  InputConfirm,
};
