import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [isFormValid, setIsFormValid] = useState(false);

  // Form validation logic
  useEffect(() => {
    const isValid =
      date &&
      time &&
      guests >= 1 &&
      guests <= 10 &&
      (occasion === "Birthday" || occasion === "Anniversary");
    setIsFormValid(isValid);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    console.log(formData);
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Table Booking Form">
  <fieldset>
    <legend>Reservation Details</legend>

    <label htmlFor="res-date">Choose date</label>
    <input
      type="date"
      id="res-date"
      name="res-date"
      value={date}
      onChange={(e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: "update_times", date: selectedDate });
      }}
      required
      aria-required="true"
    />

    <label htmlFor="res-time">Choose time</label>
    <select
      id="res-time"
      name="res-time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      required
      aria-required="true"
    >
      <option value="">-- Select a time --</option>
      {availableTimes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>

    <label htmlFor="guests">Number of guests</label>
    <input
      type="number"
      id="guests"
      name="guests"
      min="1"
      max="10"
      placeholder="1"
      value={guests}
      onChange={(e) => setGuests(Number(e.target.value))}
      required
      aria-required="true"
    />

    <label htmlFor="occasion">Occasion</label>
    <select
      id="occasion"
      name="occasion"
      value={occasion}
      onChange={(e) => setOccasion(e.target.value)}
      required
      aria-required="true"
    >
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>

    <button type="submit" aria-label="On Click to reserve a table">
      Make Your Reservation
    </button>
  </fieldset>
</form>

  );
};

export default BookingForm;
