import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, Legend,
    ResponsiveContainer
    } from 'recharts';

const PhoneBar = () => {
    const [phone, setPhone] = useState([])
    useEffect(() => {
        {
            axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
                .then(data => {

                    const loadedData = data.data.data

                    const phoneData = loadedData.map(phone => {
                        const parts = phone.slug.split('-')
                        const price = parseInt(parts[1])

                        const phoneInfo = {
                            name: phone.phone_name,
                            price: price
                        }

                        return phoneInfo;
                    })
                    console.log(phoneData)
                    setPhone(phoneData)
                })
        }
    }, [])
    return (
        <div>
            <BarChart 
             width={500}
             height={300}
             data={phone}
            >
                <Bar dataKey="price" fill="#8884d8" minPointSize={10} />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default PhoneBar;