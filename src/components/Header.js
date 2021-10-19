import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-scroll'
import Typical from 'react-typical'
import dummy from '../data/dummy'
import Card from './Card'

const Header = () => {

    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    }, []);

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='flex flex-col md:flex-row-reverse items-center justify-between'>
                <Card />
                <div className='text-gray-900 text-center md:text-left'>
                    <h2 
                    className={`${
                        animated ? '' : 'translate-y-10 opacity-0'
                    }  transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold`}
                    >
                        Hi!<br/> I'm Jinkyung
                    </h2>
                    <h1 
                    className={`${
                    animated ? '' : 'translate-y-10 opacity-0'
                    }  transform transition duration-1000 ease-in-out font-bold text-2xl text-gray-500`}>I am
                    <Typical 
                        steps={dummy.header.typical}
                        loop={Infinity}
                        className='inline-block'/>
                    </h1>
                    <Link to='stack'  smooth={true}>
                        <button className='bg-indigo-500 px-10 py-3 uppercase mt-10 rounded-lg animate-bounce'>{dummy.header.btnText}</button>
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default Header
