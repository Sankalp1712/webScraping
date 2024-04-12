import React from 'react'
import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Register</h1>
        <form action="" className='flex flex-col gap-4'>
            <input type='email' placeholder='Email'className='border p-2 rounded-lg'/>
            <input type='Text' placeholder="Teacher's Id"className='border  p-2 rounded-lg'/>
            <input type='Password' placeholder='Password'className='border  p-2 rounded-lg'/>
            <button className='mt-5 rounded-lg  uppercase hover:opacity-95 text-white p-2' style={{ backgroundColor: '#584343' }}>
                Register
              </button>
        </form>
        <p className='text-sm mt-3'><span className=' text-gray-700'>
            Already registered ?
          </span>
          <span className='text-blue-500 underline'>
            <Link to='/login'> Click Here</Link>
          </span>
          </p>
    </div>
  )
}
