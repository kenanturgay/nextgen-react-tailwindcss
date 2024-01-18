import { render, screen } from "@testing-library/react";
import AnaSayfa from "./AnaSayfa";

test("AnaSafya Testi", () => {
  // test yazmaya hazır
  render(<AnaSayfa color="yellow" />);

  const titleH2 = screen.getByTestId("anasayfa-title");

  // Assert
  expect(titleH2).toHaveTextContent("ReactJS Kütüphanesi");

  // screen.debug();
});
