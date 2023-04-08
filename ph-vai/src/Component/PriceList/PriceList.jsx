import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetch('priceList.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])
    return (
        <div>
            <h1 className='text-3xl text-center text-purple-950 bg-purple-300 font-bold p-4'> affordable price</h1>
            <div className='grid md:grid-cols-3 gap-3'>
            {
                prices.slice(0, 3).map(price => <PriceCard 
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;