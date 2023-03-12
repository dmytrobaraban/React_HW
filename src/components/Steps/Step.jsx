import React, { useContext } from 'react';
import { RegistrationContext } from '../../containers/RegistrationForm';

import {
  InputName,
  InputLastName,
  InputEmail,
  InputCity,
  InputStreet,
  InputHouse,
  InputPhoto,
  InputPassword,
  InputConfirm,
} from '../Input/Input';

const Step1 = () => {

  return (
    <div>
      <h3>Ім'я</h3>
      <InputName />
      <h3>Прізвище</h3>
      <InputLastName />
      <h3>Email</h3>
      <InputEmail />
    </div>
  );
};

const Step2 = () => {
  return (
    <div>
      <h3>Місто</h3>
      <InputCity />
      <h3>Вулиця</h3>
      <InputStreet />
      <h3>Будинок</h3>
      <InputHouse />
    </div>
  );
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
  return (
    <div>
      <h3>Пороль</h3>
      <InputPassword />
      <h3>Підтвердіть пароль</h3>
      <InputConfirm />
    </div>
  );
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
