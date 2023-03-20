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

    // // testing
    // const handleClick = () => {
    //     console.log(searchSymbolResult);
    // }

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
                <input type="text" className="form-control" placeholder="Search for Symbol"  value={searchName} onChange={(event) => {
                    setSearchName(event.target.value);
                }} />
                <button className="btn btn-primary" onClick={() => dispatch(getSymbolsAsync(searchName))}>Search</button>
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
                                    <button className="btn btn-primary" onClick={() => handleClick2(item.symbol)}>Show</button>
                                </td>
                            </tr>
                        );
                    })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={"https://s.yimg.com/uu/api/res/1.2/ubUxyPj1i4BYiO4hEnnYmw--~B/aD04MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/motleyfool.com/169871dbb2b8e5fb1bae6fc1339ed409"}
                                 alt="Modern building architecture"/>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company
                                retreats
                            </div>
                            <a href="#"
                               className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                                accommodation for your team</a>
                            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy
                                awesome food and take in some sunshine? We have a list of places to do just that.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;