import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header className='nav-bg  ' style={{ backgroundColor: '#584343' }}>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className=' mx-10 text-sm sm:text-xl flex flex-wrap '>
                        <span className='text-white'>
                            PICT
                        </span>
                        <span className='text-gray-400'>
                            ScholarHub
                        </span>
                    </h1>
                </Link>

                <ul className='flex gap-4'>
                   <Link to='/'>
                        <li className='hidden sm:inline text-white hover:underline  mx-2 text-sm'>Home</li>
                   </Link>
                    <Link to='/links'>
                        <li className='hidden sm:inline text-white hover:underline mx-2  text-sm'>Links</li>
                    </Link>
                    <Link to='/feedback'>
                        <li className='hidden sm:inline text-white hover:underline  mx-2 text-sm'>Feedback</li>
                    </Link>
                    <Link to='/login'>  
                        <li className=' text-white hover:underline  mx-2 text-sm'>Login</li>
                    </Link>
                    
                </ul>
            </div>



        </header>
    )
}
