import React from 'react'
import dummy from '../data/dummy'

const Navigation = () => {
    return (
        <div className='bg-gray-700'>
            <div className='flex items-center justify-between w-10/12 mx-auto py-3 bg-gray-700 text-white'>
                <h1 className='text-3xl font-bold'>
                    {dummy.nav.logo}
                    <span className='w-3 h-3 bg-red-500 inline-block rounded-full ml-1' />
                </h1>
                <div>
                    {dummy.nav.links.map((link , index)=>{
                        return <span key={index} className='text-xl mr-4'>{link.text}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navigation
