import React, { useReducer } from 'react';
import Header from '../components/Header/Header';
import { Step1, Step2, Step3, Step4, Step5 } from '../components/Steps/Step';

// Создаем контекст
export const RegistrationContext = React.createContext();

// Инициализируем начальное состояние
const initialState = {
  step: 1,
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  street: '',
  house: '',
  photo: null,
  password: '',
  confirm: '',
};
// Создаем редуктор
function registrationReducer(state, action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 };
    case 'PREV_STEP':
      return { ...state, step: state.step - 1 };
    case 'SUMBIT/SET':
      return { ...state, step: state.step + 1 };
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_PHOTO':
      return {
        ...state,
        photo: action.payload,
      };
    default:
      return state;
  }
}

function RegistrationPage() {
  // Используем useReducer для управления состоянием
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  // Обработчик изменения поля формы
  const handleFieldChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  // Обработчик перехода на следующий шаг
  const handleNextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  // Обработчик перехода на предыдущий шаг
  const handlePrevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const handleSubmit = () => {
    dispatch({ type: 'SUMBIT/SET' });
  };

  // Рендерим страницу в зависимости от текущего шага
  return (
    <RegistrationContext.Provider value={{ state, handleFieldChange }}>
      <div>
        <Header />
        {state.step === 1 && <Step1 />}
        {state.step === 2 && <Step2 />}
        {state.step === 3 && <Step3 />}
        {state.step === 4 && <Step4 />}
        {state.step === 5 && <Step5 />}
        <div className="btns">
          {state.step !== 1 && (
            <button onClick={handlePrevStep}>Previous</button>
          )}
          {state.step !== 4 && state.step !== 5 && (
            <button onClick={handleNextStep}>Next</button>
          )}
          {state.step === 4 && <button onClick={handleSubmit}>Sumbit</button>}
        </div>
      </div>
    </RegistrationContext.Provider>
  );
}

export default RegistrationPage;
