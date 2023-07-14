import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "./styles/theme";
import { QueryClientProvider } from "react-query";
import { request } from "./services/request"
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
            <QueryClientProvider client={request}>
                <Provider store={store}>
                    <GlobalStyle />
                    <RouterProvider router={Router} />
                </Provider>
            </QueryClientProvider>
        </Theme>
    </React.StrictMode>
)

reportWebVitals()