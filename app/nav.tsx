import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';

const HamburgerMenu = dynamic(() => import('./hamburgerMenu'));

const nav = () => {
  return (
    <><div className='h-5'></div>
    <div className='pr-3 rounded-4xl pl-3 h-15 w-10/12 bg-[#002058] flex items-center justify-between'>
        <div>
          <h1 className="font-bold text-white text-3xl">Ujwal</h1>
        </div>
        <div className="hidden md:flex md:items-center">
          <Link className=" p-2 bg-[#4592a0] focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 hover:bg-gray-300 hover:font-base hover:rounded transition-all rounded-3xl text-base cursor-pointer" href="/">Home</Link>
          <div className='h-1 w-2 bg-gray-600'></div>
          <Link className="p-2 bg-[#4592a0] focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 hover:bg-gray-300 hover:font-base hover:rounded transition-all rounded-3xl text-base cursor-pointer" href="/projects">Projects</Link>
          <div className='h-1 w-2 bg-gray-600'></div>
          <Link className="p-2 bg-[#4592a0] focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 hover:bg-gray-300 hover:font-base hover:rounded transition-all rounded-3xl text-base cursor-pointer" href="/contact">Contact</Link>
        </div>

        <div className="md:hidden">
          <HamburgerMenu />
        </div>
    </div>
    </>
  )
}

export default nav