import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [{"Datetime":"2022-11-01T09:30:00.000","Open":155.08,"High":155.45,"Low":154.04,"Close":154.28,"Adj Close":154.28,"Volume":6849699},{"Datetime":"2022-11-01T09:45:00.000","Open":154.28,"High":154.32,"Low":152.68,"Close":152.86,"Adj Close":152.86,"Volume":4457905},{"Datetime":"2022-11-01T10:00:00.000","Open":152.87,"High":152.99,"Low":150.37,"Close":150.81,"Adj Close":150.81,"Volume":6742526},{"Datetime":"2022-11-01T10:15:00.000","Open":150.81,"High":151.16,"Low":150.51,"Close":151.04,"Adj Close":151.04,"Volume":4390024},{"Datetime":"2022-11-01T10:30:00.000","Open":151.04,"High":151.04,"Low":149.66,"Close":149.87,"Adj Close":149.87,"Volume":4571265},{"Datetime":"2022-11-01T10:45:00.000","Open":149.86,"High":150.3,"Low":149.82,"Close":150.05,"Adj Close":150.05,"Volume":3195714},{"Datetime":"2022-11-01T11:00:00.000","Open":150.05,"High":150.24,"Low":149.84,"Close":150.07,"Adj Close":150.07,"Volume":2659479},{"Datetime":"2022-11-01T11:15:00.000","Open":150.06,"High":150.31,"Low":149.56,"Close":149.9,"Adj Close":149.9,"Volume":2571757}
];

export default function App() {
    return (
        <LineChart
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Datetime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="High"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="low" stroke="#82ca9d" />
        </LineChart>
    );
}
