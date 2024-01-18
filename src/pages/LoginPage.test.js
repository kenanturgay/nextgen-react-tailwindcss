import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import LoginPage from "./LoginPage";
import App from "../App";

afterEach(cleanup);

test("Login Page başarılı bir şekilde yüklendi", () => {
  const setter = () => {};
  render(<LoginPage setUserName={setter} />);
});

test("Login Page fill form", () => {
  const setter = () => {};

  render(<LoginPage setUserName={setter} />);

  const usernameInput = screen.getByTestId("username-input");
  userEvent.type(usernameInput, "ahmet.telli");

  const passwordInput = screen.getByTestId("password-input");
  userEvent.type(passwordInput, "123");

  const rememberInput = screen.getByTestId("remember-input");
  userEvent.click(rememberInput);

  const submitBtn = screen.getByTestId("login-submit");
  userEvent.click(submitBtn);

  expect(usernameInput).toHaveValue("ahmet.telli");
  expect(passwordInput).toHaveValue("123");
  expect(rememberInput).toBeChecked();
});

test("Login Page header user name test", async () => {
  const promise = Promise.resolve();

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  act(() => {
    const loginLink = screen.getByTestId("login-link");
    userEvent.click(loginLink);
  });

  const usernameInput = screen.getByTestId("username-input");
  userEvent.type(usernameInput, "ahmet.telli");

  const passwordInput = screen.getByTestId("password-input");
  userEvent.type(passwordInput, "123");
  const rememberInput = screen.getByTestId("remember-input");
  userEvent.click(rememberInput);

  const submitBtn = screen.getByTestId("login-submit");
  act(() => userEvent.click(submitBtn));

  expect(await screen.findByTestId("header-username")).toHaveTextContent(
    "ahmet.telli"
  );
  await act(() => promise);
});
