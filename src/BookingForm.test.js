// BookingForm.test.js
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';


const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const availableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm HTML validation", () => {
  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  });

  test("Date input has required attribute", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test("Time select has required attribute", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("Guest input has min and max attributes", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();
  });

  test("Occasion select has required attribute", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

import userEvent from "@testing-library/user-event";

describe("BookingForm JavaScript validation", () => {
  test("Submit button is disabled when form is incomplete", () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const submitBtn = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitBtn).toBeDisabled();
  });

  test("Submit button is enabled when form is valid", async () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitBtn = screen.getByRole("button", { name: /make your reservation/i });

    const today = new Date().toISOString().split("T")[0];

    await userEvent.type(dateInput, today);
    await userEvent.selectOptions(timeSelect, "17:00");
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, "3");
    await userEvent.selectOptions(occasionSelect, "Birthday");

    expect(submitBtn).not.toBeDisabled();
  });
});
