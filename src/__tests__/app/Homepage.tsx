import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Homepage from "@/app/(shop)/page";

describe("Home Page", () => {
  const setup = () => render(<Homepage />);

  beforeEach(() => {});

  it("should render home page", () => {
    setup();
    expect(screen.getByText("Tienda")).toBeInTheDocument();
  });

  it("should render 'Todos los productos'", () => {
    setup();
    expect(screen.getByText(/Todos los productos/i)).toBeInTheDocument();
  });
});
