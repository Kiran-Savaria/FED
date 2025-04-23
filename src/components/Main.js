import React, {useReducer} from "react";
import BookingPage from "./BookingPage";

const fetchAvailableTimes = (date) => {
  return [
    '17:00', '18:00', '19:00', '20:00', '21:00' // return same for now
  ];
};

// Reducer function
const updateTimes = (state, action) => {
  if (action.type === 'update_times') {
    return fetchAvailableTimes(action.date);
  }
  return state;
};

// Initializer function
const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd
  return fetchAvailableTimes(today);
};


const Main = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Little Lemon is a cozy Mediterranean restaurant..."
        />
        <meta property="og:title" content="Little Lemon Restaurant" />
        <meta
          property="og:description"
          content="Fresh Mediterranean cuisine in a friendly atmosphere."
        />
        <meta property="og:image" content="../assests/Logo.png" />
        <meta property="og:type" content="website" />
        <title>Little Lemon | Home</title>
      </head>
      <main className="main-content">
        <h1>Welcome to Little Lemon</h1>
        <p>Discover our delicious menu and book a table now!</p>
      </main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default Main;
