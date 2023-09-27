import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const newRange = screen.getByLabelText(/Score:/);
    fireEvent.change(newRange, { target: { value: score } })
    
    const newText = screen.getByLabelText(/Comments:/);
    fireEvent.change(newText, { target: { value: comment } })

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton)
    // You have to write the rest of the test below to make the assertion pass

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const newRange = screen.getByLabelText(/Score:/);
    fireEvent.change(newRange, { target: { value: score } });

    const newText = screen.getByLabelText(/Comments:/);
    fireEvent.change(newText,{target:{value:""}})
    // You have to write the rest of the test below to make the assertion pass
    const button = screen.getByRole("button");
    fireEvent.click(button)

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
