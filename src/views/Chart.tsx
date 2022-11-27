import React, {useEffect, useState} from "react";
import {
    ComposedChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/finance/store";
import { getChartDataBySymbolAsync } from "../store/finance/finance-slice";


export default function App() {
    //const data = [{"Date":"2022-08-22T00:00:00.000","Open":169.69,"High":169.86,"Low":167.14,"Close":167.57,"Adj Close":167.29,"Volume":69026800},{"Date":"2022-08-23T00:00:00.000","Open":167.08,"High":168.71,"Low":166.65,"Close":167.23,"Adj Close":166.95,"Volume":54147100},{"Date":"2022-08-24T00:00:00.000","Open":167.32,"High":168.11,"Low":166.25,"Close":167.53,"Adj Close":167.25,"Volume":53841500},{"Date":"2022-08-25T00:00:00.000","Open":168.78,"High":170.14,"Low":168.35,"Close":170.03,"Adj Close":169.75,"Volume":51218200},{"Date":"2022-08-26T00:00:00.000","Open":170.57,"High":171.05,"Low":163.56,"Close":163.62,"Adj Close":163.35,"Volume":78961000},{"Date":"2022-08-29T00:00:00.000","Open":161.15,"High":162.9,"Low":159.82,"Close":161.38,"Adj Close":161.11,"Volume":73314000},{"Date":"2022-08-30T00:00:00.000","Open":162.13,"High":162.56,"Low":157.72,"Close":158.91,"Adj Close":158.65,"Volume":77906200},{"Date":"2022-08-31T00:00:00.000","Open":160.31,"High":160.58,"Low":157.14,"Close":157.22,"Adj Close":156.96,"Volume":87991100},{"Date":"2022-09-01T00:00:00.000","Open":156.64,"High":158.42,"Low":154.67,"Close":157.96,"Adj Close":157.7,"Volume":74229900},{"Date":"2022-09-02T00:00:00.000","Open":159.75,"High":160.36,"Low":154.97,"Close":155.81,"Adj Close":155.55,"Volume":76957800},{"Date":"2022-09-06T00:00:00.000","Open":156.47,"High":157.09,"Low":153.69,"Close":154.53,"Adj Close":154.27,"Volume":73714800},{"Date":"2022-09-07T00:00:00.000","Open":154.82,"High":156.67,"Low":153.61,"Close":155.96,"Adj Close":155.7,"Volume":87449600},{"Date":"2022-09-08T00:00:00.000","Open":154.64,"High":156.36,"Low":152.68,"Close":154.46,"Adj Close":154.2,"Volume":84923800},{"Date":"2022-09-09T00:00:00.000","Open":155.47,"High":157.82,"Low":154.75,"Close":157.37,"Adj Close":157.11,"Volume":68028800},{"Date":"2022-09-12T00:00:00.000","Open":159.59,"High":164.26,"Low":159.3,"Close":163.43,"Adj Close":163.16,"Volume":104956000},{"Date":"2022-09-13T00:00:00.000","Open":159.9,"High":160.54,"Low":153.37,"Close":153.84,"Adj Close":153.59,"Volume":122656600},{"Date":"2022-09-14T00:00:00.000","Open":154.79,"High":157.1,"Low":153.61,"Close":155.31,"Adj Close":155.05,"Volume":87965400},{"Date":"2022-09-15T00:00:00.000","Open":154.65,"High":155.24,"Low":151.38,"Close":152.37,"Adj Close":152.12,"Volume":90481100},{"Date":"2022-09-16T00:00:00.000","Open":151.21,"High":151.35,"Low":148.37,"Close":150.7,"Adj Close":150.45,"Volume":162278800},{"Date":"2022-09-19T00:00:00.000","Open":149.31,"High":154.56,"Low":149.1,"Close":154.48,"Adj Close":154.22,"Volume":81474200},{"Date":"2022-09-20T00:00:00.000","Open":153.4,"High":158.08,"Low":153.08,"Close":156.9,"Adj Close":156.64,"Volume":107689800},{"Date":"2022-09-21T00:00:00.000","Open":157.34,"High":158.74,"Low":153.6,"Close":153.72,"Adj Close":153.47,"Volume":101696800},{"Date":"2022-09-22T00:00:00.000","Open":152.38,"High":154.47,"Low":150.91,"Close":152.74,"Adj Close":152.49,"Volume":86652500},{"Date":"2022-09-23T00:00:00.000","Open":151.19,"High":151.47,"Low":148.56,"Close":150.43,"Adj Close":150.18,"Volume":96029900},{"Date":"2022-09-26T00:00:00.000","Open":149.66,"High":153.77,"Low":149.64,"Close":150.77,"Adj Close":150.52,"Volume":93339400},{"Date":"2022-09-27T00:00:00.000","Open":152.74,"High":154.72,"Low":149.95,"Close":151.76,"Adj Close":151.51,"Volume":84442700},{"Date":"2022-09-28T00:00:00.000","Open":147.64,"High":150.64,"Low":144.84,"Close":149.84,"Adj Close":149.59,"Volume":146691400},{"Date":"2022-09-29T00:00:00.000","Open":146.1,"High":146.72,"Low":140.68,"Close":142.48,"Adj Close":142.24,"Volume":128138200},{"Date":"2022-09-30T00:00:00.000","Open":141.28,"High":143.1,"Low":138.0,"Close":138.2,"Adj Close":137.97,"Volume":124925300},{"Date":"2022-10-03T00:00:00.000","Open":138.21,"High":143.07,"Low":137.69,"Close":142.45,"Adj Close":142.21,"Volume":114311700},{"Date":"2022-10-04T00:00:00.000","Open":145.03,"High":146.22,"Low":144.26,"Close":146.1,"Adj Close":145.86,"Volume":87830100},{"Date":"2022-10-05T00:00:00.000","Open":144.07,"High":147.38,"Low":143.01,"Close":146.4,"Adj Close":146.16,"Volume":79471000},{"Date":"2022-10-06T00:00:00.000","Open":145.81,"High":147.54,"Low":145.22,"Close":145.43,"Adj Close":145.19,"Volume":68402200},{"Date":"2022-10-07T00:00:00.000","Open":142.54,"High":143.1,"Low":139.45,"Close":140.09,"Adj Close":139.86,"Volume":85925600},{"Date":"2022-10-10T00:00:00.000","Open":140.42,"High":141.89,"Low":138.57,"Close":140.42,"Adj Close":140.19,"Volume":74899000},{"Date":"2022-10-11T00:00:00.000","Open":139.9,"High":141.35,"Low":138.22,"Close":138.98,"Adj Close":138.75,"Volume":77033700},{"Date":"2022-10-12T00:00:00.000","Open":139.13,"High":140.36,"Low":138.16,"Close":138.34,"Adj Close":138.11,"Volume":70433700},{"Date":"2022-10-13T00:00:00.000","Open":134.99,"High":143.59,"Low":134.37,"Close":142.99,"Adj Close":142.75,"Volume":113224000},{"Date":"2022-10-14T00:00:00.000","Open":144.31,"High":144.52,"Low":138.19,"Close":138.38,"Adj Close":138.15,"Volume":88598000},{"Date":"2022-10-17T00:00:00.000","Open":141.07,"High":142.9,"Low":140.27,"Close":142.41,"Adj Close":142.17,"Volume":85250900},{"Date":"2022-10-18T00:00:00.000","Open":145.49,"High":146.7,"Low":140.61,"Close":143.75,"Adj Close":143.51,"Volume":99136600},{"Date":"2022-10-19T00:00:00.000","Open":141.69,"High":144.95,"Low":141.5,"Close":143.86,"Adj Close":143.62,"Volume":61758300},{"Date":"2022-10-20T00:00:00.000","Open":143.02,"High":145.89,"Low":142.65,"Close":143.39,"Adj Close":143.15,"Volume":64522000},{"Date":"2022-10-21T00:00:00.000","Open":142.87,"High":147.85,"Low":142.65,"Close":147.27,"Adj Close":147.03,"Volume":86548600},{"Date":"2022-10-24T00:00:00.000","Open":147.19,"High":150.23,"Low":146.0,"Close":149.45,"Adj Close":149.2,"Volume":75981900},{"Date":"2022-10-25T00:00:00.000","Open":150.09,"High":152.49,"Low":149.36,"Close":152.34,"Adj Close":152.09,"Volume":74732300},{"Date":"2022-10-26T00:00:00.000","Open":150.96,"High":151.99,"Low":148.04,"Close":149.35,"Adj Close":149.1,"Volume":88194300},{"Date":"2022-10-27T00:00:00.000","Open":148.07,"High":149.05,"Low":144.13,"Close":144.8,"Adj Close":144.56,"Volume":109180200},{"Date":"2022-10-28T00:00:00.000","Open":148.2,"High":157.5,"Low":147.82,"Close":155.74,"Adj Close":155.48,"Volume":164762400},{"Date":"2022-10-31T00:00:00.000","Open":153.16,"High":154.24,"Low":151.92,"Close":153.34,"Adj Close":153.09,"Volume":97943200},{"Date":"2022-11-01T00:00:00.000","Open":155.08,"High":155.45,"Low":149.13,"Close":150.65,"Adj Close":150.4,"Volume":80379300},{"Date":"2022-11-02T00:00:00.000","Open":148.95,"High":152.17,"Low":145.0,"Close":145.03,"Adj Close":144.79,"Volume":93604600},{"Date":"2022-11-03T00:00:00.000","Open":142.06,"High":142.8,"Low":138.75,"Close":138.88,"Adj Close":138.65,"Volume":97918500},{"Date":"2022-11-04T00:00:00.000","Open":142.09,"High":142.67,"Low":134.38,"Close":138.38,"Adj Close":138.38,"Volume":140716700},{"Date":"2022-11-07T00:00:00.000","Open":137.11,"High":139.15,"Low":135.67,"Close":138.92,"Adj Close":138.92,"Volume":83374600},{"Date":"2022-11-08T00:00:00.000","Open":140.41,"High":141.43,"Low":137.49,"Close":139.5,"Adj Close":139.5,"Volume":89908500},{"Date":"2022-11-09T00:00:00.000","Open":138.5,"High":138.55,"Low":134.59,"Close":134.87,"Adj Close":134.87,"Volume":74917800},{"Date":"2022-11-10T00:00:00.000","Open":141.24,"High":146.87,"Low":139.5,"Close":146.87,"Adj Close":146.87,"Volume":118854000},{"Date":"2022-11-11T00:00:00.000","Open":145.82,"High":150.01,"Low":144.37,"Close":149.7,"Adj Close":149.7,"Volume":93903800},{"Date":"2022-11-14T00:00:00.000","Open":148.97,"High":150.28,"Low":147.43,"Close":148.28,"Adj Close":148.28,"Volume":73374100},{"Date":"2022-11-15T00:00:00.000","Open":152.22,"High":153.59,"Low":148.56,"Close":150.04,"Adj Close":150.04,"Volume":89868300},{"Date":"2022-11-16T00:00:00.000","Open":149.13,"High":149.87,"Low":147.29,"Close":148.79,"Adj Close":148.79,"Volume":64218300},{"Date":"2022-11-17T00:00:00.000","Open":146.43,"High":151.48,"Low":146.15,"Close":150.72,"Adj Close":150.72,"Volume":80389400},{"Date":"2022-11-18T00:00:00.000","Open":152.31,"High":152.7,"Low":149.97,"Close":151.29,"Adj Close":151.29,"Volume":74794600},{"Date":"2022-11-21T00:00:00.000","Open":150.16,"High":150.37,"Low":147.72,"Close":148.01,"Adj Close":148.01,"Volume":58724100},{"Date":"2022-11-22T00:00:00.000","Open":148.13,"High":150.09,"Low":146.93,"Close":150.07,"Adj Close":150.07,"Volume":37277212}];

    const chartDataResult:  any = useSelector((state: RootState) => state.finance.chartDataResult);
    const [data, setData] = useState(chartDataResult.data);
    const [upperLimit, setUpperLimit] = useState(100);
    const [lowerLimit, setLpperLimit] = useState(180);
    //const [upperLimit, setUpperLimit] = useState(chartDataResult.max_high);
    //const [lowerLimit, setLpperLimit] = useState(chartDataResult.min_high);

    const dispatch = useDispatch() as any;

    // Test
    const handleClick = () => {
        console.log(chartDataResult);
    }

    // Load on mount
    useEffect(() => {
        dispatch(getChartDataBySymbolAsync())
    },[]);

    return (
        <div>
    <ComposedChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#129a74" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
                </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#DDD" />
            <XAxis dataKey="Date" label="Time (days)"  tick={false}/>
            <YAxis type="number" domain={[lowerLimit, upperLimit]} />
            <Tooltip />
            <Line type="monotone" strokeLinecap="round" strokeWidth={2}
                  style={{ strokeDasharray: `40% 60%` }}
                dataKey="High"
                stroke="#006991"
                dot={false}
                legendType="none"
            />
            <Area
                type="monotone"
                dataKey="High"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorUv)"
            />
        </ComposedChart>
            <div>
                <button onClick={handleClick}>Test</button>
            </div>
        </div>
    );
}
