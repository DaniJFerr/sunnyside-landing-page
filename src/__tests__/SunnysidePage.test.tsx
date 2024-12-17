import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SunnysidePage } from "../SunnysidePage";

describe("SunnysidePage", () => {
  it("renders without crashing", () => {
    render(<SunnysidePage />);
    expect(screen.getByText("We are creatives")).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    render(<SunnysidePage />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
  });

  it("renders testimonials section", () => {
    render(<SunnysidePage />);
    expect(screen.getByText("CLIENT TESTIMONIALS")).toBeInTheDocument();
    expect(screen.getByText("Emily R.")).toBeInTheDocument();
    expect(screen.getByText("Thomas S.")).toBeInTheDocument();
    expect(screen.getByText("Jennie F.")).toBeInTheDocument();
  });
});
