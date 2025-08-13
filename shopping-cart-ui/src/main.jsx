import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProductProvider } from "./context/ProductContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProductProvider>
            <App />
        </ProductProvider>
    </StrictMode>
);
