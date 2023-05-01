import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Reservations from "./components/Reservations";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "./components/fetchAPI";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  const [error, setError] = useState(true);
  const [APIDates, setAPIDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState({
    date: "",
    time: "",
  });

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    numberOfGuests: 1,
    occasion: "Birthday",
  });

  function reducer(state, action) {
    switch (action.type) {
      case "setBookSlots":
        return {
          ...state,
          bookSlots: state.bookSlots.filter(
            (slot) => !state.dates[formData?.date]?.includes(slot)
          ),
        };
        break;
      case "resetBookSlots":
        return { ...state, bookSlots: APIDates };
        break;
      case "setDates":
        const dateProperty = formData.date;
        const timeProperty = formData.time;
        submitAPI(formData);
        if (!state.dates[dateProperty]) {
          return {
            ...state,
            dates: { ...state.dates, [dateProperty]: [timeProperty] },
          };
        } else {
          return {
            ...state,
            dates: {
              ...state.dates,
              [dateProperty]: [...state.dates[dateProperty], timeProperty],
            },
          };
        }

      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    bookSlots: APIDates,
    dates: {},
  });

  useEffect(() => {
    const apiDates = fetchAPI(new Date(formData.date));
    setAPIDates(apiDates);
    setFormData((prev) => {
      return { ...prev, time: apiDates[0] };
    });
    console.log(apiDates);
  }, [formData.date]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/reservations"
          element={
            <Reservations
              formData={formData}
              setFormData={setFormData}
              state={state}
              dispatch={dispatch}
              setSelectedDate={setSelectedDate}
              setError={setError}
              error={error}
            />
          }
        />
        <Route
          path="/confirmed"
          element={
            <ConfirmedBooking formData={formData} selectedDate={selectedDate} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
