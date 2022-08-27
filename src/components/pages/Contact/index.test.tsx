import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
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
  it("renders contact form without form field errors", () => {
    render(<ContactPage />);
    expect(screen.getByTestId("contact-form")).toBeDefined();

    expect(screen.queryByTestId("name-error")).toBe(null);
    expect(screen.queryByTestId("email-error")).toBe(null);
    expect(screen.queryByTestId("message-error")).toBe(null);
  });
});
