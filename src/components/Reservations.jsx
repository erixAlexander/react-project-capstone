import React from "react";
import BookingForm from "./BookingForm";
import { useEffect } from "react";

const Reservations = ({
  error,
  setError,
  setSelectedDate,
  formData,
  setFormData,
  setDates,
  state,
  dispatch,
}) => {
  useEffect(() => {
    dispatch({ type: "resetBookSlots" });
  }, [formData.date]);

  useEffect(() => {
    dispatch({ type: "setBookSlots" });
  }, [formData.date, state.dates]);

  return (
    <main className="reservations">
      <section className="reservations-title">
        <h1 data-testid="heading1">Reserve Your Table</h1>
      </section>
      <section className="reservations-available-slots">
        {!state.bookSlots.length ? (
          <p>No slots available</p>
        ) : (
          <>
            <h1>
              {formData?.date
                ? `Available Slots for ${formData?.date}`
                : "Choose a Date to See the Available Slots"}
            </h1>
            <div>
              {state.bookSlots?.map((slot, i) => {
                return <span key={i}>{slot}</span>;
              })}
            </div>
          </>
        )}
      </section>
      <BookingForm
        setDates={setDates}
        formData={formData}
        setFormData={setFormData}
        state={state}
        dispatch={dispatch}
        setSelectedDate={setSelectedDate}
        error={error}
        setError={setError}
      />
    </main>
  );
};

export default Reservations;
