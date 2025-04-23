import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <section className="booking-section">
      <h1 className="booking-heading">Reserve Your Table</h1>
      <div className="flexdiv">
        <div className="booking-left">
          <div className="booking-benefits">
            <div>
            <h2>Why Book with Little Lemon?</h2>
            <ul>
              <li>✅ Easy online reservations</li>
              <li>✅ Guaranteed table availability</li>
              <li>✅ Cozy atmosphere perfect for all occasions</li>
              <li>✅ Fresh Mediterranean dishes prepared daily</li>
              <li>✅ Friendly and attentive staff</li>
              <li>✅ Great Ambiance</li>
              <li>✅ Top Notch services</li>
            </ul>
            </div>
          </div>
        </div>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
};

export default BookingPage;
