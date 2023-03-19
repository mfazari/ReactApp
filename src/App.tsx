import Home from "./views/Home";
import { useSelector, useDispatch } from "react-redux";
import { getSymbolsAsync, getChartDataBySymbolAsync } from "./store/finance/finance-slice";
import {RootState} from "./store/finance/store";
import Chart from "./views/Chart";
import React, {useState} from "react";

const App = () => {
    const searchSymbolResult:  {id: number, name: string, symbol: string}[] = useSelector((state: RootState) => state.finance.searchSymbolResult);
    const dispatch = useDispatch() as any;
    const [searchName, setSearchName] = useState("");



    // testing
    const handleClick = () => {
        console.log(searchSymbolResult);
    }

    let handleClick2 = (searchName: string) => {
        dispatch(getChartDataBySymbolAsync(searchName));
    }

    return (
        <div>
            <Home></Home>
            <div>
                <Chart></Chart>
            </div>
            <div>
                <button onClick={handleClick}>Test</button>
                <input type="text" value={searchName} onChange={(event) => {
                    setSearchName(event.target.value);
                }} />
                <button onClick={() => dispatch(getSymbolsAsync(searchName))}>Search</button>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Symbol</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
                    {searchSymbolResult.map((item:  {id: number, name: string, symbol: string}) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.symbol}</td>
                                <td>
                                    <button onClick={() => handleClick2(item.symbol)}>Show</button>
                                </td>
                            </tr>
                        );
                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default App;