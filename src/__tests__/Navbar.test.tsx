import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "../components/Navbar";

describe("Navbar", () => {
  it("renders navigation items", () => {
    render(<Navbar />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
  });

  it("toggles mobile menu", () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("Toggle navigation menu");
    fireEvent.click(menuButton);
    expect(screen.getByText("About")).toBeVisible();
  });
});
