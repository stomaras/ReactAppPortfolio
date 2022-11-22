import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { App } from "../../../src/App";
import { Link } from "react-router-dom";
import { Navigation } from "../../routes/navigation/navigation.component";

test("Full App rendering/navigating", () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Navigation />}></Route>
      </Routes>
    </MemoryRouter>
  );
  const links = screen.getAllByRole("link");
  expect(links[0].textContent).toEqual("Logo");
  //   const wrapper = render(<App />, { wrapper: BrowserRouter });
  //   expect(wrapper.getByTestId("home-id")).toBeInTheDocument();
  //   wrapper.debug(undefined, 2000);
  //   const linkHome = screen
  //     .getByText("SHOP")
  //     .closest("a")
  //     .toHaveAttribute("href", "/shop");
  //   await userEvent.click(linkHome);
  //   expect(window.location.href).toBe("http://localhost:3000/shop");
});
