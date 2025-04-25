import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Make sure you import this
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID =
  "378629500446-f254dvjr0a2h03judi7i2v6514dpadlc.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  
    <StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </StrictMode>
  
);
