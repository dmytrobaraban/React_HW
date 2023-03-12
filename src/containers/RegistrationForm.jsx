import React, { useReducer } from 'react';
import Header from '../components/Header/Header';
import { Step1, Step2, Step3, Step4, Step5 } from '../components/Steps/Step';

// Створюємо контекст
export const RegistrationContext = React.createContext();

// Ініціюємо початковий стан
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
// Створюємо  reducer
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

const RegistrationPage = () => {
  // Створюємо useReducer для керування станом
  const [state, dispatch] = useReducer(registrationReducer, initialState);

  // Обробник змін поля форми
  const handleFieldChange = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  // Обробник переходу на наступний крок
  const handleNextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  // Обробник переходу на попередній крок
  const handlePrevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const handleSubmit = () => {
    dispatch({ type: 'SUMBIT/SET' });
  };


// Рендерим сорінку у залежності від поточного кроку

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
