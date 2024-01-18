import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Uygulama başarıyla çalıştırıldı", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
