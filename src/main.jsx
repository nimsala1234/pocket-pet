import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";   // you are using App.js, so import it
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
