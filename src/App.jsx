import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import RegistrationPage from './containers/RegistrationForm';

function App() {

  return (
    <Wrapper>
      <RegistrationPage/>
    </Wrapper>
  );
}

export default App;
