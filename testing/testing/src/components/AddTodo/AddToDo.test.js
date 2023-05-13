import { render, screen, fireEvent } from "@testing-library/react";
import AddToDo from "./AddToDo";

let mockSetInput = jest.fn();
let mockSaveTodo = jest.fn();
// on change input must change
it("on change input must change", () => {
  render(<AddToDo setInput={mockSetInput} saveTodo={mockSaveTodo} />);
  const inputElement = screen.getByPlaceholderText(/Enter Todo/i);
  fireEvent.change(inputElement, { target: { value: "sample" } });
  expect(inputElement.value).toBe("sample");
});

// on click button method called
it("on click button method called", () => {
  render(<AddToDo setInput={mockSetInput} saveTodo={mockSaveTodo} />);
  const buttonElement = screen.getByTitle("my-button-title");
  fireEvent.click(buttonElement);
  expect(mockSaveTodo).toBeCalled();
});

// on click button input must be get reset
