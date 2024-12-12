import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsDetails from "./Pages/ProductsDetails";

const root = createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>


);
