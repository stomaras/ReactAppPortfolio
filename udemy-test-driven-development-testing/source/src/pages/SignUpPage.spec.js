import SignUpPage from "./SignUpPage";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { setupServer } from "msw/node";
import { rest } from "msw";
import i18n from "../locale/i18n";
import en from "../locale/en.json";
import tr from "../locale/tr.json";
import LanguageSelector from "../components/LanguageSelector";

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
      let requestBody;
      let counter = 0;
      const server = setupServer(
        rest.post("/api/1.0/users", (req, res, ctx) => {
          requestBody = req.body;
          counter += 1;
          return res(ctx.status(200));
        })
      );
    
    beforeEach(() => {
      counter = 0;
      server.resetHandlers();
    })

    beforeAll(() => server.listen());

    afterAll(() => server.close());

    let button, usernameInput, emailInput, passwordInput, passwordRepeatInput;

    const setup = async () => {
      render(<SignUpPage />);
      usernameInput = screen.getByLabelText("Username");
      emailInput = screen.getByLabelText("E-mail");
      passwordInput = screen.getByLabelText("Password");
      passwordRepeatInput = screen.getByLabelText("Password Repeat");
      await userEvent.type(usernameInput, "user1");
      await userEvent.type(emailInput, "user1@mail.com");
      await userEvent.type(passwordInput, "P4ssword");
      await userEvent.type(passwordRepeatInput, "P4ssword");
      button = screen.queryByRole("button", { name: "Register" });
    }

    it("enables the button when password and password repeat fields have the same value", async () => {
      await setup();
      expect(screen.getByTestId("register")).toBeEnabled();
    });
    it("sends username, password, email to backend after clicking the button", async () => {
      await setup();
      await userEvent.click(button);
      await screen.findByText('Please check your e-mail to activate your account');
      expect(requestBody).toEqual({
        username: "user1",
        email: "user1@mail.com",
        password: "P4ssword",
      });
    });
    it("disables button when there is an ongoing api call", async () => {
      await setup();
      await userEvent.click(button);
      await userEvent.click(button);
      await screen.findByText('Please check your e-mail to activate your account');
      expect(counter).toBe(1);
    });
    it("displays spinner after clicking the submit", async () => {
      await setup();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      await userEvent.click(button);
      const spinner = screen.getByRole('status', { hidden:true });
      expect(spinner).toBeInTheDocument();
      await screen.findByText('Please check your e-mail to activate your account');
    });
    it("displays account activation notification after successful sign up request", async () => {
      await setup();
      const message = 'Please check your e-mail to activate your account';
      expect(screen.queryByText(message)).not.toBeInTheDocument();
      await userEvent.click(button);
      const text = await screen.findByText(message);
      expect(text).toBeInTheDocument();
    });
    it('hides sign up form after successful sign up request', async () => {
      await setup();
      const form = screen.getByTestId("form-sign-up");
      await userEvent.click(button);
      await waitFor(() => {
        expect(form).not.toBeInTheDocument();
      })
    });

    const generateValidationError = (field, message) => {
      return rest.post("/api/1.0/users", (req, res, ctx) => {
        return res(ctx.status(400), ctx.json({
          validationErrors: { [field]: message}
        }));
      })
    }

    it.each`
    field         | message
    ${"username"} | ${"Username cannot be null"}
    ${"email"}    | ${"E-mail cannot be null"}
    ${"password"} | ${"Password cannot be null"}
    `("displays $message for $field", async ({field, message}) => {
      server.use(generateValidationError(field,message));
      await setup();
      await userEvent.click(button);
      const validationError = await screen.findByText(message);
      expect(validationError).toBeInTheDocument();
    })
    
    // it("displays validation message for username", async () => {
    //   server.use(
    //     rest.post("/api/1.0/users", (req, res, ctx) => {
    //       return res(ctx.status(400), ctx.json({
    //         validationErrors: { username: "Username cannot be null"}
    //       }));
    //     })
    //   );
    //   await setup();
    //   await userEvent.click(button);
    //   const validationError = await screen.findByText("Username cannot be null");
    //   expect(validationError).toBeInTheDocument();
    // })
    
    it("hides spinner and enables button after response received", async () => {
      server.use(generateValidationError("username", "Username cannot be null"));
      await setup();
      await userEvent.click(button);
      const validationError = await screen.findByText("Username cannot be null");
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(button).toBeEnabled();
    });
    it("displays mispatch message for password repeat input", async () => {
      await setup();
      await userEvent.type(passwordInput, 'P4ssword');
      await userEvent.type(passwordRepeatInput, 'AnotherP4ssword');
      const validationError = screen.queryByText("Password mismatch");
      expect(validationError).toBeInTheDocument();
    });
    it.each`
      field           | message                       | label
      ${'username'}   | ${'Username cannot be null'}  | ${'Username'}  
      ${'email'}      | ${'E-mail cannot be null'}    | ${'E-mail'}
      ${'password'}   | ${'Password cannot be null'}  | ${'Password'}
    `
    ("clear validation error after $field is updated", async ({field, message, label}) => {
      server.use(generateValidationError(field, message));
      await setup();
      await userEvent.click(button);
      const validationError = await screen.findByText(message);
      await userEvent.type(screen.getByLabelText(label), 'user1-updated');
      expect(validationError).not.toBeInTheDocument();
    });
    // it("displays validation message for email", async () => {
    //   server.use(
    //     rest.post("/api/1.0/users", (req, res, ctx) => {
    //       return res(ctx.status(400), ctx.json({
    //         validationErrors: { email: "E-mail cannot be null"}
    //       }));
    //     })
    //   );
    //   await setup();
    //   await userEvent.click(button);
    //   const validationError = await screen.findByText("E-mail cannot be null");
    //   expect(validationError).toBeInTheDocument();
    // })
  });

  describe("Internationalization", () => {
    const setup = () => {
      render(
        <>
          <SignUpPage/>
          <LanguageSelector/> 
        </>
      )
    }
    
    afterEach(() => {
      act(() => {
        i18n.changeLanguage("en");
      })  
    })

    it("Initially display all text in english", () => {
      setup();
      expect(screen.getByRole("heading", {name: en.signUp})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: en.register})).toBeInTheDocument();
      expect(screen.getByLabelText(en.username)).toBeInTheDocument();
      expect(screen.getByLabelText(en.email)).toBeInTheDocument();
      expect(screen.getByLabelText(en.password)).toBeInTheDocument();
      expect(screen.getByLabelText(en.passwordRepeat)).toBeInTheDocument();
    })
  
    it("Displays all text in turkish after changing the language", async () => {
      setup();
      const turkishToggle = screen.getByTitle("Turkce");
      await userEvent.click(turkishToggle);

      expect(screen.getByRole("heading", {name: tr.signUp})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: tr.register})).toBeInTheDocument();
      expect(screen.getByLabelText(tr.username)).toBeInTheDocument();
      expect(screen.getByLabelText(tr.email)).toBeInTheDocument();
      expect(screen.getByLabelText(tr.password)).toBeInTheDocument();
      expect(screen.getByLabelText(tr.passwordRepeat)).toBeInTheDocument();
    })
    
    it("Displays all text in english after changing back from turkish", async () => {
      setup();
      const turkishToggle = screen.getByTitle("Turkce");
      await userEvent.click(turkishToggle);
      const englishToggle = screen.getByTitle("English");
      await userEvent.click(englishToggle);

      expect(screen.getByRole("heading", {name: en.signUp})).toBeInTheDocument();
      expect(screen.getByRole('button', {name: en.register})).toBeInTheDocument();
      expect(screen.getByLabelText(en.username)).toBeInTheDocument();
      expect(screen.getByLabelText(en.email)).toBeInTheDocument();
      expect(screen.getByLabelText(en.password)).toBeInTheDocument();
      expect(screen.getByLabelText(en.passwordRepeat)).toBeInTheDocument();
    })

    it("Displays password mismatch validation in Turkish", async () => {
      setup();
      const turkishToggle = screen.getByTitle("Turkce");
      await userEvent.click(turkishToggle);

      const passwordInput = screen.getByLabelText(tr.password);
      userEvent.type(passwordInput, "P4ss");
      const validationMessageInTurkish = screen.queryByText(tr.passwordMismatchValidation);
      expect(validationMessageInTurkish).toBeInTheDocument();
    })
  })
});
