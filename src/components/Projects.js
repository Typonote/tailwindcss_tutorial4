import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../assets/teamproject1.png'

const Projects = () => {
    return (
    <section class="min-h-screen flex flex-col items-center justify-center bg-primary  dark:bg-primary " id='projects'>
        
        <h1 class="text-5xl font-bold mt-7 text-accent">Projects</h1>

        <div class="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-col-1 px-8 py-24 gap-8">

            
            <div>
                <a href='https://github.com/Typonote/ReviewKingProject' >
                    <div class="bg-secondary dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={image1} alt="Image Size 720x400" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-bold mb-3">팀 프로젝트</h3>
                        <h2 class="text-lg text-primary font-medium title-font mb-1 font-bold">음식점 리뷰 사이트 제작</h2>
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-bold mb-4">프론트엔드</h3>                        
                        <p class="leading-relaxed text-base text-primary">크롤링한 음식점 리뷰 데이터를 워드 클라우드로 변환하여 소비자가 한눈에 볼 수 있는 사이트를 제작하였습니다.</p>
                    </div>
                </a>
            </div>

            <div>
                <a href='https://github.com/Typonote/ReviewKingProject' >
                    <div class="bg-secondary dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 shadow-md">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={image1} alt="Image Size 720x400" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-bold mb-3">팀 프로젝트</h3>
                        <h2 class="text-lg text-primary font-medium title-font mb-1 font-bold">음식점 리뷰 사이트 제작</h2>
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-bold mb-4">프론트엔드</h3>                        
                        <p class="leading-relaxed text-base text-primary">크롤링한 음식점 리뷰 데이터를 워드 클라우드로 변환하여 소비자가 한눈에 볼 수 있는 사이트를 제작하였습니다.</p>
                    </div>
                </a>
            </div>

            <div>
                <a href='https://github.com/Typonote/ReviewKingProject' >
                    <div class="bg-secondary dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={image1} alt="Image Size 720x400" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-bold mb-3">팀 프로젝트</h3>
                        <h2 class="text-lg text-primary font-medium title-font mb-1 font-bold">음식점 리뷰 사이트 제작</h2>
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-bold mb-4">프론트엔드</h3>                        
                        <p class="leading-relaxed text-base text-primary">크롤링한 음식점 리뷰 데이터를 워드 클라우드로 변환하여 소비자가 한눈에 볼 수 있는 사이트를 제작하였습니다.</p>
                    </div>
                </a>
            </div>

            <div>
                <a href='https://github.com/Typonote/ReviewKingProject' >
                    <div class="bg-secondary dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={image1} alt="Image Size 720x400" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-bold mb-3">팀 프로젝트</h3>
                        <h2 class="text-lg text-primary font-medium title-font mb-1 font-bold">음식점 리뷰 사이트 제작</h2>
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-bold mb-4">프론트엔드</h3>                        
                        <p class="leading-relaxed text-base text-primary">크롤링한 음식점 리뷰 데이터를 워드 클라우드로 변환하여 소비자가 한눈에 볼 수 있는 사이트를 제작하였습니다.</p>
                    </div>
                </a>
            </div>

            

        </div>
        
    </section>
    );
}

export default Projects
