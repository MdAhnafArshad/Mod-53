import React from 'react';
const Link = ({rout}) => {

    const {name, path} =rout

    return (
        <div>
            <li className='m-2  hover:bg-purple-600'>
                <a href={path}> {name} </a>
            </li>
        </div>
    );
};

export default Link;