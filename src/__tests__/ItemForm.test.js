import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  // Count the initial number of "Dessert" items
  const initialDessertCount = screen.queryAllByText(/Dessert/).length;

  // Simulate entering a new item name
  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  // Simulate selecting a new item category
  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  // Simulate form submission
  fireEvent.click(screen.getByText(/Add to List/i));

  // Check if the new item is added to the list
  expect(screen.getByText(/Ice Cream/)).toBeInTheDocument();

  // Verify the number of "Dessert" items has increased by 1
  expect(screen.queryAllByText(/Dessert/).length).toBe(initialDessertCount + 1);
});
