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
import { useLocation } from "react-router-dom";



import {RootState} from "../store/finance/store";
import { getChartDataBySymbolAsync } from "../store/finance/finance-slice";


export default function Chart() {
    const chartDataResult:  any = useSelector((state: RootState) => state.finance.chartDataResult);
    const dispatch = useDispatch() as any;

    const [lineColor, setLineColor] = useState("#129a74");
    //const [searchName, setSearchName] = useState("");

    const location = useLocation()
    const searchName = location.state?.fromSymbol;

    // Test
    const handleClick = () => {
        console.log(chartDataResult);
    }

    // Load on mount
    useEffect(() => {
        mount();

    },[]);

    async function mount(){
        await dispatch(getChartDataBySymbolAsync(searchName));
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
}
