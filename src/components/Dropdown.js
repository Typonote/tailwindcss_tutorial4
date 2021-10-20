import React from 'react'
import { Link } from 'react-scroll'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-gray-100' : 'hidden'}  onClick={toggle}>
                <Link className='p-4' to='home'>Home</Link>
                <Link className='p-4' to='stack'>Stack</Link>
                <Link className='p-4' to='work'>Work</Link>
                <Link className='p-4' to='contact'>Contact</Link>
        </div>
    )
}

export default Dropdown