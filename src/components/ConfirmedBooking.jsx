import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = ({ selectedDate }) => {
  return (
    <main className="confirmed">
      <div>
        <h1>You have succesfully booked your table!</h1>
        <h3>The date is {selectedDate.date}</h3>
        <h3>And the time is {selectedDate.time}</h3>
      </div>

      <div>
        <h2>Would you like to reserve another table?</h2>
        <Link to={"/reservations"}>Go back to reservations!</Link>
      </div>
    </main>
  );
};

export default ConfirmedBooking;
