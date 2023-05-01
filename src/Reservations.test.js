import { render, screen } from "@testing-library/react";
import Reservations from "./components/Reservations";

test("Renders the Reservations heading", () => {
  render(
    <Reservations
      formData={{
        date: "2023-03-03",
        time: "17:00" || "No slots available",
        numberOfGuests: 0,
        occasion: "Birthday",
      }}
      state={{
        bookSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        dates: {"2023-03-03":["17:00"]},
      }}
    />
  );
  const { getByText } = within(screen.getByTestId("heading1"));
  expect(getByText("Reserve Your Table")).toBeInTheDocument();
});
