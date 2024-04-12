import React from 'react'
import {Link } from 'react-router-dom'
export default function Home() {
    const pictUrl='https://www.pict.edu/'
  return (
    <div>
        <div className='text-center  content-center mt-18 mb-10'>
            <a href={pictUrl}><img className='mx-auto mb-5 w-50 h-auto' src='https://www.pict.edu/images/pic.jpg' alt='Pict logo' /></a>
            <p className='text-sm text-red-700 font-semibold'>Society for Computer Technology and Research's</p>
            <h1 className='text-lg font-semibold'>PUNE INSTITUTE OF COMPUTER TECHNOLOGY</h1>
            <p className='text-sm text-red-700 '>(An Autonomous Institute affiliated to Saviribai Phule Pune University)</p>
        </div>
        <div className=' text-center'>
        <Link to='/login' className='p-4 border rounded-3xl mt-2 text-white text-sm ' style={{backgroundColor:'#584343' }}>ADMIN LOGIN</Link>
        </div>
            
        
        
    </div>
  )
}
