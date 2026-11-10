import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import AppRoutes from "../../routes/AppRoutes";

function renderAt(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("Login screen", () => {
  it("renders the welcome content and prefilled email", () => {
    renderAt();

    expect(
      screen.getByRole("heading", { name: "Welcome Back!" }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toHaveValue(
      "rifqi.naufal@mail.com",
    );
    expect(screen.getByRole("button", { name: "Log In" })).toBeInTheDocument();
  });

  it("toggles password visibility", async () => {
    const user = userEvent.setup();
    renderAt();

    const password = screen.getByLabelText("Password");
    expect(password).toHaveAttribute("type", "password");

    await user.click(screen.getByRole("button", { name: "Show password" }));
    expect(password).toHaveAttribute("type", "text");
  });

  it("navigates to the register screen", async () => {
    const user = userEvent.setup();
    renderAt();

    await user.click(screen.getByRole("link", { name: "Register" }));

    expect(
      screen.getByRole("heading", { name: "Create Account" }),
    ).toBeInTheDocument();
  });

  it("navigates to the forgot password screen", async () => {
    const user = userEvent.setup();
    renderAt();

    await user.click(
      screen.getByRole("link", { name: "Forgot your password?" }),
    );

    expect(
      screen.getByRole("heading", { name: "Forgot Password?" }),
    ).toBeInTheDocument();
  });
});
