import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {store} from './store/finance/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './views/Home';
import Search from './views/Search';
import Chart from './views/Chart';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <>
        <Provider store={store}>
            <Home></Home>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                </Route>
                <Route path="/Search" element={<Search/>}>
                </Route>
                <Route path="/Search/Chart/" element={<Chart/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
    </>,
);
reportWebVitals();
