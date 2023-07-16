import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "./styles/theme";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";
import { store } from "./app/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Theme>
            <Provider store={store}>
                <GlobalStyle />
                <ToastContainer />
                <RouterProvider router={Router} />
            </Provider>
        </Theme>
    </React.StrictMode>
)

reportWebVitals()