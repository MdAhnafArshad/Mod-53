import React from 'react';
import { BeakerIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex gap-2 items-center'>
             <CheckCircleIcon className="h-6 w-6 text-green-200" />
            <span>{feature}</span>
        </div>
    );
};

export default Feature;