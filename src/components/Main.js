import React, { useReducer } from "react";
import BookingPage from "./BookingPage";

// Simulated API call — same times for any date
export const fetchAvailableTimes = (date) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

// Reducer function
export const updateTimes = (state, action) => {
  if (action.type === "update_times") {
    return fetchAvailableTimes(action.date);
  }
  return state;
};

// Initial state initializer
export const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return fetchAvailableTimes(today);
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      {/* Move this to react-helmet in real apps */}
      {/* For now, skip <head> or handle with HTML template */}

      <main className="main-content">
        <h1>Welcome to Little Lemon</h1>
        <p>Discover our delicious menu and book a table now!</p>
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
      </main>
    </>
  );
};

export default Main;
