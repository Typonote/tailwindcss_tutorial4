import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import dummy from '../data/dummy'

const Navigation = ({toggle}) => {

    const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>`

    const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`

    const switchToggle = document.querySelector('#switch-toggle');
    
    const[isDarkmode, setIsDarkmode ] = useState(false)

    const toggleTheme = () => {
        setIsDarkmode(isDarkmode => !isDarkmode);
        switchTheme()
    };

    const switchTheme = () => {
        if (isDarkmode) {
            switchToggle.classList.remove('bg-yellow-500','-translate-x-2')
            switchToggle.classList.add('bg-gray-700','translate-x-full')
            setTimeout(() => {
            switchToggle.innerHTML = darkIcon
            }, 250);
        } else {
            switchToggle.classList.add('bg-yellow-500','-translate-x-2')
            switchToggle.classList.remove('bg-gray-700','translate-x-full')
            setTimeout(() => {
            switchToggle.innerHTML = lightIcon
            }, 250);
        }
    };

    useEffect(() => {
        
    },[isDarkmode]);

    return (
        <div>
            <div className='flex items-center justify-between  py-3 bg-gray-100 text-gray-900'>

                <button 
                    class="ml-4 w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
                    onclick={toggleTheme}>
                    <div
                        id="switch-toggle"
                        className="w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                </button>

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
