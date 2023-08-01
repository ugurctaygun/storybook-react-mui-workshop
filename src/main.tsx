import { createRoot } from "react-dom/client";
import App from "./App";
import { createTheme } from "./theme";
import AppDecorator from "./components/AppDecorator";
import { BrowserRouter, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <AppDecorator {...{ createTheme, selectedTheme: "light" }}>
        <App />
      </AppDecorator>
    </Routes>
  </BrowserRouter>
);
