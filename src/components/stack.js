import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import dummy from '../data/dummy'

const Stack = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-secondary dark:bg-secondary' id='stack'>
        
                <h1 className="text-5xl font-bold text-accent">Stack</h1>
            
                    <div className="flex flex-wrap justify-center mt-10">
                        {dummy.stack.tech.map((tech,index)=>{
                            return (
                            <span className = 'w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5'>
                                <LazyLoadImage src={tech.img} alt={tech.alt}/>
                            </span>
                            );
                        })}
                    </div>
                    <p className="w-11/12 md:max-w-xl text-xl text-center mt-10 dark:text-white">{dummy.stack.desc}</p>
                
            
        </div>
    )
}

export default Stack
