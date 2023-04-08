import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
]
const Deshbord = () => {

    const [mark, setMark] = useState()
    useEffect(() => {
        fetch('marksdata.json')
        .then(res => res.json())
        .then(data => setMark(data))
    }, [])


    return (
        <div>
            <LineChart 
            width={500}
            height={300}
            data={data}
            >
                <Line dataKey="uv"></Line>
            </LineChart>
        </div>
    );
};

export default Deshbord;