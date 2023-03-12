import React, { useContext } from 'react';
import { RegistrationContext } from '../../containers/RegistrationForm';

const Header = () => {
  const { state } = useContext(RegistrationContext);
  if (state.step > 4) {
    return <h1>Дякуємо за реєстрацію!</h1>;
  }
  return <h1>Крок {state.step}</h1>;
};

export default Header;
