import Home from "./views/Home";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/counter/counter-slice";
import {RootState} from "./store/counter/store";

const App = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <Home></Home>
            <div>
                <button onClick={() => dispatch(actions.increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
            </div>
        </div>
    );
};

export default App;