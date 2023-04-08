import React from 'react';
import Feature from '../Feature/Feature';


const PriceCard = ({ price }) => {
    return (
        <div className='mx-5 px-5 bg-indigo-400 p-2 m-1 rounded-sm flex flex-col'>
            <h2 className=' text-center'>
                <span className='text-purple-700 text-xl font-medium'>{price.price}</span>
            </h2>
            <h5 className='text-xl font-bold text-center'>{price.name}</h5>
            <p className='underline text-white'>Feature: </p>
            {
                price.features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-green-300 w-100 rounded  mt-auto hover:bg-green-400 hover:text-white'>by now</button>
        </div>
    );
};

export default PriceCard;