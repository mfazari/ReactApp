import React, {useEffect, useState} from "react";
import {
    ComposedChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import {useDispatch, useSelector} from "react-redux";


import {RootState} from "../store/finance/store";
import { getChartDataBySymbolAsync } from "../store/finance/finance-slice";


export default function App() {
    const chartDataResult:  any = useSelector((state: RootState) => state.finance.chartDataResult);
    const dispatch = useDispatch() as any;

    const [lineColor, setLineColor] = useState("#129a74");

    // Test
    const handleClick = () => {
        console.log(chartDataResult);
    }


    // Load on mount
    useEffect(() => {
        mount();

    },[]);

    async function mount(){
        await dispatch(getChartDataBySymbolAsync());
        if(!chartDataResult){
            console.log(chartDataResult.data.length);
            let length = chartDataResult.data.length - 1;
            if(chartDataResult.data[0].High > chartDataResult.data[length].High) {
                setLineColor("#FF0000");
            }
        }

    }

    useEffect(() => {
        if(chartDataResult.data){
        let length = chartDataResult.data.length - 1;
        if(chartDataResult.data[0].High > chartDataResult.data[length].High) {
            setLineColor("#FF0000");
        }}
    }, [chartDataResult]);

    return (
        <div>
    <ComposedChart
            width={500}
            height={300}
            data={chartDataResult.data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={lineColor} stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
                </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#DDD" />
            <XAxis dataKey="Date" label="Time (days)"  tick={false}/>
            <YAxis type="number" domain={[chartDataResult.min_high, chartDataResult.max_high]} />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="High"
                stroke={lineColor}
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
