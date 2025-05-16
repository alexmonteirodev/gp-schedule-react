import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";
import { CalendarProvider } from "./CalendarContext.jsx";

createRoot(document.getElementById("root")).render(
  <CalendarProvider>
    <App />
  </CalendarProvider>
);
