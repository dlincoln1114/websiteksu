import React from 'react'
import { Link } from 'react-router-dom'
import "@fontsource/poppins";

const navbar = () => {
  return (
    <div>
        <div className='sticky top-0 z-20 flex justify-between items-center h-10 mx-auto px-4 pb-2 bg-white font-poppins'>
            <Link to='/' className='w-full text-center'>
                <h1 className='text-black text-2xl pt-1 font-bold font-poppins' >Logo</h1>
            </Link>
        </div>
    </div>
  );
}

export default navbar