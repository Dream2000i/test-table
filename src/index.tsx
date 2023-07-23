import React from "react";
import ReactDOM from "react-dom";
import App from "core/App";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";

document.body.innerHTML = '<div id="root"></div>';

// const App = (): JSX.Element => {
//   return <h1>Hello, 21323world!</h1>;
// };

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById("root"));