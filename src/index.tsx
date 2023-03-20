import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './store/finance/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <>
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                </Route>
                {/*<Route path="/Chart" element={<Chart/>}>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    </Provider>
    </>,
);
reportWebVitals();
