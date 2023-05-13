import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("header element is present", () => {
  render(<Header text="my-test" />);
  const element = screen.getByText(/my-test/i);
  //  expect(element).toBeInTheDocument();
  // expect(element.length).toBe(2);
  expect(element).toContainHTML("h1");
});

// create
// it("header element is present", () => {
//   render(<Header text="my-test" />);
//   const element = screen.getAllByRole("heading");
//   //  expect(element).toBeInTheDocument();
//   expect(element.length).toBe(2);
// });

// it("header element is present with h1", () => {
//   render(<Header text="sample" />);
//   const element = screen.getByText(/sample/i);
//   expect(element).toContainHTML("h1");
// });

// it("check button is visible", () => {
//   render(<Header />);
//   let button = screen.getByRole("button");
//   expect(button).toBeVisible();
// });
