import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("uses a prop of 'search' to display the search term in the input field", () => {
  render(<Filter search="testing" onSearchChange={() => {}} />);
  
  expect(screen.queryByPlaceholderText(/Search/).value).toBe("testing");
});

test("calls the onSearchChange callback prop when the input is changed", () => {
  const onSearchChange = jest.fn();
  render(<Filter search="" onSearchChange={onSearchChange} />);

  fireEvent.change(screen.queryByPlaceholderText(/Search/), {
    target: { value: "test" },
  });

  expect(onSearchChange).toHaveBeenCalledWith(expect.any(Object));
});
