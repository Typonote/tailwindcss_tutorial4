import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Typical from 'react-typical'
import dummy from '../data/dummy'

const Header = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-800'>
            <div>
                <div>
                    <LazyLoadImage src={dummy.header.image} effect='blur'/>
                </div>
                <div className='text-white'>
                    <h2>
                        Hi!<br/> I'm Jinkyung
                    </h2>
                    <h1>I am </h1>
                    <Typical 
                        steps={dummy.header.typical}
                        loop={Infinity}
                        className='inline-blocks'/>
                </div>
            </div> 
        </div>
    )
}

export default Header
