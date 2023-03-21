import React, { useContext, useState } from 'react';
import { RegistrationContext } from '../../containers/RegistrationForm';

const InputsFirstPage = ({ validateName }) => {
  const { state, handleFieldChange } = useContext(RegistrationContext);
  const [nameError, setNameError] = useState('');

  const handleInputName = (e) => {
    const value = e.target.value;
    if (validateName(value)) {
      setNameError('');
    } else {
      setNameError('Поле має містити не менше 5 символів');
    }
    handleFieldChange('firstName', value);
  };

  return (
    <>
      <h3>Ім'я</h3>
      {nameError && <span>{nameError}</span>}
      <input type="text" value={state.firstName} onChange={handleInputName} />
      <h3>Прізвище</h3>
      <input
        type="text"
        value={state.lastName}
        onChange={(e) => handleFieldChange('lastName', e.target.value)}
      />
      <h3>Email</h3>
      <input
        type="email"
        value={state.email}
        onChange={(e) => handleFieldChange('email', e.target.value)}
      />
    </>
  );
};

const InputsSecondPage = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <>
      <h3>Місто</h3>
      <input
        type="text"
        value={state.city}
        onChange={(e) => handleFieldChange('city', e.target.value)}
      />
      <h3>Вулиця</h3>
      <input
        type="text"
        value={state.street}
        onChange={(e) => handleFieldChange('street', e.target.value)}
      />
      <h3>Будинок</h3>
      <input
        type="text"
        value={state.house}
        onChange={(e) => handleFieldChange('house', e.target.value)}
      />
    </>
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

const InputsPassword = () => {
  const { state, handleFieldChange } = useContext(RegistrationContext);

  return (
    <>
      <h3>Пороль</h3>
      <input
        type="password"
        value={state.password}
        onChange={(e) => handleFieldChange('password', e.target.value)}
      />
      <h3>Підтвердіть пароль</h3>
      <input
        type="password"
        value={state.confirm}
        onChange={(e) => handleFieldChange('confirm', e.target.value)}
      />
    </>
  );
};

export { InputsFirstPage, InputsSecondPage, InputPhoto, InputsPassword };
