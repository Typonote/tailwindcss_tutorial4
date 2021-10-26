import React, { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Myresume from '../assets/resume_kim_jinkyung.docx'
import Myword from '../assets/microsoft_word.png'
import emailjs from 'emailjs-com'

const Resume = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_aqh19er', 'template_arzf081', e.target,'user_AlRoxjzYDpL95QMcNEjIa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
        };


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

        <p class="leading-relaxed text-base text-primary mx-4 text-md sm:text-xl mb-10">저의 능력과 함께 앞으로 하고자 하는 것들에 대한 내용을 담았습니다.</p>


        
            <div class="max-w-6xl mx-5 sm:px-6 lg:px-8">
                <div class="mt-8 overflow-hidden">
                    <div class="grid grid-cols-1 lg:grid-cols-2">
                        <div class="p-6 mr-2 bg-white dark:bg-gray-800 sm:rounded-lg shadow-xl">
                            <h1 class="text-2xl sm:text-3xl text-primary font-extrabold tracking-tight">
                                저를 더 알고 싶으시다면,
                            </h1>
                            <h1 class="text-2xl sm:text-3xl text-primary font-extrabold tracking-tight mt-3">
                                성함과 연락처를 남겨주세요
                            </h1>

                            <div class="flex items-start mt-8 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <div class="ml-4 text-md tracking-wide font-semibold w-40 text-left pt-1">
                                    경기도 용인
                                </div>
                            </div>

                            <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <div class="ml-4 text-md tracking-wide font-semibold w-40 text-left">
                                010-4014-0470
                                </div>
                            </div>

                            <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div class="ml-4 text-md tracking-wide font-semibold w-40 text-left">
                                    kimradium@naver.com
                                </div>
                            </div>

                        </div>

                        <form class="p-6 flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
                            <div class="flex flex-col">
                                <label for="name" class="hidden">성함</label>
                                <input type="name" name="name" id="name" placeholder="성함" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold focus:border-indigo-500 focus:outline-none"/>
                            </div>

                            <div class="flex flex-col mt-2">
                                <label for="email" class="hidden">이메일</label>
                                <input type="email" name="email" id="email" placeholder="이메일" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold focus:border-indigo-500 focus:outline-none"/>
                            </div>

                            <div class="flex flex-col mt-2">
                                <label for="tel" class="hidden">연락처</label>
                                <input type="tel" name="tel" id="tel" placeholder="연락처" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold focus:border-indigo-500 focus:outline-none"/>
                            </div>

                            <input type="submit" value='전송' class="md:w-32 bg-indigo-500 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"/>
                                
                        </form>
                    </div>
                </div>
            </div>      

    </section>
    )
}

export default Resume
