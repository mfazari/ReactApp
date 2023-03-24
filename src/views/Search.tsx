import { useSelector, useDispatch } from "react-redux";
import { getSymbolsAsync } from "../store/finance/finance-slice";
import {RootState} from "../store/finance/store";
import { Link } from 'react-router-dom';
import React, {useState} from "react";


const Search = () => {
    const searchSymbolResult:  {id: number, name: string, symbol: string}[] = useSelector((state: RootState) => state.finance.searchSymbolResult);
    const dispatch = useDispatch() as any;
    const [searchName, setSearchName] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }

    return (
        <div className="row text-center">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <div className="card m-0 shadow">
                <form className="text-start" onSubmit={handleSubmit}>
                    <div className="row my-5 input-group card-body">
                        <div className="col-md-4 text-start">
                            <input type="text" className="form-control" placeholder="Search for Symbol"  value={searchName} onChange={(event) => {
                                setSearchName(event.target.value);
                            }} />
                        </div>
                        <div className="col-md-4 text-start">
                            <button className="btn btn-primary" onClick={() => dispatch(getSymbolsAsync(searchName))}>Search</button>
                        </div>
                    </div>
                </form>
                <div>
                    <table className="table table-row-dashed">
                        <thead>
                        <tr className="fw-bold fs-5 text-gray-800 border-bottom border-gray-200">
                            <th scope="col">Name</th>
                            <th scope="col">Symbol</th>
                            <th scope="col"></th>

                        </tr>
                        </thead>
                        <tbody>
                        {searchSymbolResult.map((item:  {id: number, name: string, symbol: string}) => {
                            // @ts-ignore
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.symbol}</td>
                                    <td>
                                        <Link to="Chart" state = {{ fromSymbol: item.symbol }}>
                                            <button className="btn btn-primary">Show</button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
        </div>
    );
};

export default Search;