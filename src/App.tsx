import Home from "./views/Home";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/counter/counter-slice";
import {RootState} from "./store/counter/store";
import Chart from "./views/Chart";
import WeatherService from "./services/WeatherService";
import {initializeUseSelector} from "react-redux/es/hooks/useSelector";

const App = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    //const hello = new WeatherService();
    //hello.getData()


    return (
        <div>
            <Home></Home>
            <div>
                <button onClick={() => dispatch(actions.increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
            </div>
            <div>
                <Chart></Chart>
            </div>
            <div>
                <button onClick={() => dispatch(actions.getTodo("5"))}>GET TODO</button>
            </div>
        </div>
    );
};

export default App;