import React, { useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {

    const [open, setOpen] = useState(false);


    const routes = [
        {
            name: "Home",
            path: "/",
            component: "HomeComponent"
        },
        {
            name: "About",
            path: "/about",
            component: "AboutComponent",
        },
        {
            name: "Contact",
            path: "/contact",
            component: "ContactComponent",
        }
    ];

    return (

        <nav className='bg-purple-400'>
            <div onClick={() => { setOpen(!open) }} className="md:hidden">
                <span>{
                    open === true ?
                        <XMarkIcon className="h-6 w-6 text-purple-500" />
                        : <Bars3Icon className="h-6 w-6 text-purple-500" />
                }
                </span>


            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-purple-400 p-4 rounded-sm  ${open ? 'top-30' : '-top-36'}`}>
                {
                    routes.map(rout => <Link key={rout.name} rout={rout} />) 
                }
            </ul>
        </nav>
    );
};

export default Navbar;