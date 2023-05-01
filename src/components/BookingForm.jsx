import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({
  error,
  setError,
  setSelectedDate,
  formData,
  setFormData,
  state,
  dispatch,
}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (!formData.date) {
      setError(true);
      return;
    }
    setSelectedDate((prev) => {
      return { ...prev, date: formData.date, time: formData.time };
    });
    dispatch({ type: "setDates" });
    navigate("/confirmed");
  };

  useEffect(() => {
    if (formData.date) {
      setError(false);
    }
  }, [formData.date]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      time: state.bookSlots[0],
    }));
  }, [state.bookSlots]);

  return (
    <section>
      <form onSubmit={handleSubmit} className="reservations-form">
        <div>
          <label htmlFor="date">Date</label>
          {!formData.date && (
            <p style={{ color: "red" }}>Please select a date</p>
          )}
          <input
            aria-label="On Click"
            value={formData.date}
            onChange={(e) => {
              const date = e.target.value;
              setFormData((prev) => ({ ...prev, date }));
            }}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            aria-label="On Click"
            onChange={(e) => {
              const time = e.target.value;
              setFormData((prev) => ({ ...prev, time }));
            }}
            value={formData.time}
            id="res-time "
          >
            {!state.bookSlots.length ? (
              <option required>No slots Available</option>
            ) : (
              state.bookSlots.map((slot) => {
                return (
                  <option required key={slot}>
                    {slot}
                  </option>
                );
              })
            )}
          </select>
        </div>
        <div>
          <label htmlFor="number_of_guests">Number of Guests</label>
          {formData.numberOfGuests < 1 && (
            <p style={{ color: "red" }}>Minimun of 1 guest to book a table</p>
          )}
          <input
            value={formData.numberOfGuests}
            onChange={(e) => {
              const numberOfGuests = e.target.value;
              setFormData((prev) => ({ ...prev, numberOfGuests }));
            }}
            type="number"
            name="number_of_guests"
            id="number_of_guests"
          />
        </div>
        <div>
          <label htmlFor="select">Select an Occasion</label>
          <select
            value={formData.occasion}
            onChange={(e) => {
              const occasion = e.target.value;
              setFormData((prev) => ({ ...prev, occasion }));
            }}
            id="occasion"
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <input
          disabled={error || !formData.date || formData.numberOfGuests < 1}
          className="btn"
          type="submit"
          value="Make Your reservation"
        />
      </form>
      {(error || !formData.date || formData.numberOfGuests < 1) && (
        <p>You must select a date</p>
      )}
    </section>
  );
};

export default BookingForm;
