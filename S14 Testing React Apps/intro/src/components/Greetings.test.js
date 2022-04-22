import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greetings";

describe("Greeting Component", () => {
  test("Testing Greeting Block", () => {
    //Arrage
    render(<Greeting />);

    //Act

    // Assert
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Testing the button", () => {
    //Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const explanationElement = screen.getByText("Some explanations.", {
      exact: false,
    });

    expect(explanationElement).toBeInTheDocument();
  });
});
