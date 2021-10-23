import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import dummy from '../data/dummy'

const Stack = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-secondary dark:bg-secondary' id='stack'>
        
                <h1 className="text-5xl font-bold text-accent py-24">Stack</h1>
            
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 ">
                        {dummy.stack.tech.map((tech,index)=>{
                            return (
                            <span className = 'w-40 h-40 bg-white shadow-2xl rounded-full flex items-center p-5'>
                                <LazyLoadImage src={tech.img} alt={tech.alt}/>
                            </span>
                            );
                        })}
                    </div>
                    <p className="w-11/12 md:max-w-xl text-md sm:text-xl text-center mt-20 dark:text-white">
                        저는 항상 고민합니다.<br/>
                        &quot;더 나은 코드로 작성할 수 있지 않을까?&quot;<br/>
                        그러한 고민 속에서 다양한 기술을 시도하였고, <br/>
                        실패를 거듭한 끝에 저의 것으로 만들었습니다. <br/>

                    </p>
                
            
        </div>
    )
}

export default Stack
