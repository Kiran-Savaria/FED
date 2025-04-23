import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Reserve Your Table");
    expect(headingElement).toBeInTheDocument();
});

