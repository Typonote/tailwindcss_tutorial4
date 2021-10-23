import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Myresume from '../assets/resume.txt'
import Myword from '../assets/microsoft_word.png'

const Resume = () => {
    return (

    <section className='min-h-screen flex flex-col items-center  justify-center bg-secondary dark:bg-secondary' id='resume'>
                
        <h1 className="text-5xl font-bold mt-7 mb-7 text-accent">Resume</h1>

        <span className = 'w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5'>
            <LazyLoadImage src={Myword} alt='word' style={{maxWidth:'90%'}}/>
        </span>

        <button 
        type="button" 
        class="px-4 py-3 bg-indigo-500 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 mt-5 mb-8 flex"
        >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>

            <a href={Myresume} download className="ml-2 font-bold">download</a>
        </button>

        <p class="leading-relaxed text-base text-primary mx-3 text-md sm:text-xl ">저의 능력과 함께 앞으로 하고자 하는 것들에 대한 내용을 담았습니다.</p>
    </section>
    )
}

export default Resume
