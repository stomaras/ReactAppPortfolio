import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Sign Up Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignUpPage />);
      const header = screen.queryByText(/sign up/i);
      expect(header).toBeInTheDocument();
    });
    it("has username input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Username");
      expect(input).toBeInTheDocument();
    });
    it("has email input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("E-mail");
      expect(input).toBeInTheDocument();
    });
    it("has password input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password");
      expect(input).toBeInTheDocument();
    });
    it("has password type for password input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password");
      expect(input.type).toBe("password");
    });
    it("has password repeat input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password Repeat");
      expect(input).toBeInTheDocument();
    });
    it("has password type for password repeat input", () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText("Password Repeat");
      expect(input.type).toBe("password");
    });
    it("has button", () => {
      render(<SignUpPage />);
      const button = screen.queryByRole("button", { name: "Register" });
      expect(button).toBeInTheDocument();
    });
    it("disables the button initially", () => {
      render(<SignUpPage />);
      const button = screen.queryByRole("button", { name: "Register" });
      expect(button).toBeDisabled();
    });
  });
  describe("Interactions", () => {
    it("enables the button when password and password repeat have the same value", async () => {
      render(<SignUpPage />);
      const passwordInput = screen.getByLabelText("Password");
      const passwordRepeatInput = screen.getByLabelText("Password Repeat");
      await userEvent.type(passwordInput, "P4ssowrd");
      await userEvent.type(passwordRepeatInput, "P4ssowrd");
      expect(screen.getByTestId("register")).toBeDisabled(false);
    });
  });
});
