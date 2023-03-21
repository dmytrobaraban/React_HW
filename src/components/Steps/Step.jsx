import React, { useContext } from 'react';
import { RegistrationContext } from '../../containers/RegistrationForm';
import './style.css';

import {
  InputsFirstPage,
  InputsSecondPage,
  InputPhoto,
  InputsPassword,
} from '../Input/Input';


const Step1 = () => {
  const validateName = (firstName) => {
    return firstName.length >= 2;
  };

  const validateLastName = (lastName) => {
    return lastName.length >= 3;
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <InputsFirstPage
      validate={{ validateName, validateLastName, validateEmail }}
    />
  );
};

const Step2 = () => {
  return <InputsSecondPage />;
};

const Step3 = () => {
  const { state } = useContext(RegistrationContext);
  return (
    <div>
      <InputPhoto />
      {state.photo && (
        <div
          className="photo"
          style={{
            backgroundImage: `url(${URL.createObjectURL(state.photo)})`,
          }}
        ></div>
      )}
    </div>
  );
};

const Step4 = () => {
  return <InputsPassword />;
};

const Step5 = () => {
  const { state } = useContext(RegistrationContext);
  return (
    <div>
      {state.photo && (
        <div
          className="photo"
          style={{
            backgroundImage: `url(${URL.createObjectURL(state.photo)})`,
          }}
        ></div>
      )}
      <h4>Контактна інформація</h4>
      <ul className="info">
        <li>Ім'я: {state.firstName} </li>
        <li>Ім'я: {state.lastName} </li>
        <li>Ім'я: {state.email} </li>
        <li>Ім'я: {state.city} </li>
        <li>Ім'я: {state.street} </li>
        <li>Ім'я: {state.house} </li>
      </ul>
    </div>
  );
};

export { Step1, Step2, Step3, Step4, Step5 };
