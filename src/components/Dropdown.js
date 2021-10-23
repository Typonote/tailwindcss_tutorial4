import React from 'react'
import { Link } from 'react-scroll'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-primary' : 'hidden'}  onClick={toggle}>
                <Link className='p-4 text-primary hover:text-accent' to='home'>Home</Link>
                <Link className='p-4 text-primary hover:text-accent' to='stack'>Stack</Link>
                <Link className='p-4 text-primary hover:text-accent' to='projects'>Projects</Link>
                <Link className='p-4 text-primary hover:text-accent' to='resume'>Resume</Link>
        </div>
    )
}

export default Dropdown