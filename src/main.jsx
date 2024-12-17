import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "./redux/Store";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </BrowserRouter>


);
