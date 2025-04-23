import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api';
import BookingPage from './BookingPage';

const initializeTimes = () => fetchAPI(new Date());
const updateTimes = (state, action) => {
  if (action.type === 'update_times') {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

const Main = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      alert('There was a problem confirming your booking.');
    }
  };

  return (
    <>
      <main className="main-content">
        <h1>Welcome to Little Lemon</h1>
        <p>Discover our delicious menu and book a table now!</p>
      </main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </>
  );
};

export default Main;
