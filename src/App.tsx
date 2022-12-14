import Home from "./views/Home";
import { useSelector, useDispatch } from "react-redux";
import { getSymbolsAsync } from "./store/finance/finance-slice";
import {RootState} from "./store/finance/store";
import Chart from "./views/Chart";

const App = () => {
    const searchSymbolResult:  {id: number, name: string, symbol: string}[] = useSelector((state: RootState) => state.finance.searchSymbolResult);
    const dispatch = useDispatch() as any;


    // testing
    const handleClick = () => {
        console.log(searchSymbolResult);
    }


    return (
        <div>
            <Home></Home>
            <div>
                <Chart></Chart>
            </div>
            <div>
                <button onClick={handleClick}>Test</button>
                <button onClick={() => dispatch(getSymbolsAsync())}>Search</button>
                <div>
                    {searchSymbolResult.map((item:  {id: number, name: string, symbol: string}) => {
                        return (
                            <p key={item.id}>
                                {item.name}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;