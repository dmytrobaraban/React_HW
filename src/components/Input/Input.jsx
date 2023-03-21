import React, { useContext, useReducer } from 'react';
import { RegistrationContext } from '../../containers/RegistrationForm';
import {
  initialState,
  registrationReducer,
} from '../../containers/RegistrationForm';

const InputsFirstPage = ({ validate }) => {
  const { state, handleFieldChange } = useContext(RegistrationContext);
  const [errStates, dispatch] = useReducer(registrationReducer, initialState);

  const handleInputName = (e) => {
    const value = e.target.value;
    if (validate.validateName(value)) {
      dispatch({
        type: 'SET_ERROR',
        payload: { fieldName: 'firstName', error: '' },
      });
    } else {
      dispatch({
        type: 'SET_ERROR',
        payload: {
          fieldName: 'firstName',
          error: 'Поле має містити не менше 2 символи',
        },
      });
    }
    handleFieldChange('firstName', value);
  };

  const handleInputlastName = (e) => {
    const value = e.target.value;
    if (validate.validateLastName(value)) {
      dispatch({
        type: 'SET_ERROR',
        payload: { fieldName: 'lastName', error: '' },
      });
    } else {
      dispatch({
        type: 'SET_ERROR',
        payload: {
          fieldName: 'lastName',
          error: 'Поле має містити не менше 3 символів',
        },
      });
    }
    handleFieldChange('lastName', value);
  };

  const handleInputEmail = (e) => {
    const value = e.target.value;
    if (validate.validateEmail(value)) {
      dispatch({
        type: 'SET_ERROR',
        payload: { fieldName: 'email', error: '' },
      });
    } else {
      dispatch({
        type: 'SET_ERROR',
        payload: {
          fieldName: 'email',
          error: 'Введіть коректний email',
        },
      });
    }
    handleFieldChange('email', value);
  };

  return (
    <>
      <h3>Ім'я</h3>
      {errStates.errors.firstName && <span>{errStates.errors.firstName}</span>}
      <input type="text" value={state.firstName} onChange={handleInputName} />
      <h3>Прізвище</h3>
      {errStates.errors.lastName && <span>{errStates.errors.lastName}</span>}
      <input
        type="text"
        value={state.lastName}
        onChange={handleInputlastName}
      />
      <h3>Email</h3>
      {errStates.errors.email && <span>{errStates.errors.email}</span>}
      <input type="email" value={state.email} onChange={handleInputEmail} />
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
