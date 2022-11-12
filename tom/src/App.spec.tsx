import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import App from "./App";
import TestRenderer from "react-test-renderer";
import SignUpPage from "./page/SignUpPage";

describe("SignUpForm Component Renders", () => {
  it("expect component SignUp", () => {
    const app = TestRenderer.create(<App />);
    console.log(app.toTree());
    const instance = app.root;
    expect(instance.findAllByType(SignUpPage));
  });
});
