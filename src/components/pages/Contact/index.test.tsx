import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { theme } from "../../../theme/theme";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router";

import Contact from ".";

const ContactPage = () => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <Contact />
      </ThemeProvider>
    </MemoryRouter>
  );
};

describe("contact page", () => {
  it("renders contact form without form field errors on load", () => {
    render(<ContactPage />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();

    expect(screen.queryByTestId("name-error")).not.toBeInTheDocument();
    expect(screen.queryByTestId("email-error")).not.toBeInTheDocument();
    expect(screen.queryByTestId("message-error")).not.toBeInTheDocument();
  });

  it("calls emailjs api on submit", () => {
    render(<ContactPage />);

    fireEvent.change(screen.getByTestId("name-input"), {
      target: { value: "Test Name" },
    });
    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "testemail@test.email" },
    });
    fireEvent.change(screen.getByTestId("message-input"), {
      target: { value: "This is a message!" },
    });

    expect(screen.queryByTestId("name-error")).not.toBeInTheDocument();
    expect(screen.queryByTestId("email-error")).not.toBeInTheDocument();
    expect(screen.queryByTestId("message-error")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    //...
  });

  // it("shows correct error messages when a field is incomplete", () => {
  //   render(<ContactPage />);
  // });

  // it("shows correct error messages when a field is filled incorrectly", () => {
  //   render(<ContactPage />);
  // });
});
