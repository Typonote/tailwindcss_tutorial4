import React, { useState } from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import './Topbutton.scss'

const Topbutton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <div className='button-top text-indigo-500 '>
            <button>
                <FaArrowCircleUp onClick={scrollToTop} 
                style={{display: visible ? 'inline' : 'none'}} />
            </button>
        </div>
    )
}

export default Topbutton
