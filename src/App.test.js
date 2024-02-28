import { screen, getByText, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";


test("Test reading screen", () => {
    render(<App />);

    const headerElement = screen.getByText('Contact')
    expect(headerElement).toBeInTheDocument();
})