import { useSelector, useDispatch } from "react-redux";
import { getSymbolsAsync, getChartDataBySymbolAsync } from "./store/finance/finance-slice";
import {RootState} from "./store/finance/store";
import React, {useState} from "react";
import Home from "./views/Home";
import Chart from "./views/Chart";

const App = () => {
    return (
        <div>
            <p>Hello</p>
        </div>
    );
};

export default App;