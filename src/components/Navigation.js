import React from 'react'
import { Link } from 'react-scroll';
import dummy from '../data/dummy'

const Navigation = ({toggle}) => {
    return (
        <div>
            <div className='flex items-center justify-between  py-3 bg-gray-100 text-gray-900 sticky'>
                <h1 className='text-3xl font-bold ml-8'>
                    {dummy.nav.logo}
                    <span className='w-3 h-3 bg-red-500 inline-block rounded-full ml-1' />
                </h1>

                <div className='px-8 cursor-pointer md:hidden' onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                <div className='pr-8 md:block hidden'>
                    {dummy.nav.links.map((link , index)=>{
                        return (
                        <Link to={link.to}  smooth={true}>
                        <span key={index} className='text-xl mr-4 cursor-pointer font-bo'>{link.text}</span>
                        </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navigation
