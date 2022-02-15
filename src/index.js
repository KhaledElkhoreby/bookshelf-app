import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { BookContextProvider } from "./store/bookContext";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
