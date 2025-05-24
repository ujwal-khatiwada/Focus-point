import React from 'react'

const items = ['Home', 'Projects', 'Contact'];
const list = items.map((item) => <li className='inset-0 bg-opacity-50 bg-gray-600 h-14 w-60 mt-1 pl-5 rounded font-xl text-white flex items-center'>{item}</li>);

const sidebar = () => {
  return (
    <div className='md:hidden fixed top-20 right-0 h-full w-64 opacity-2 bg-gray-300 z-50 transform transition-transform duration-300'>
        <div className='h-screen w-70 pt-3 bg-gray-300 '>
            <ul className="p-3">{list}</ul>
        </div>
    </div>
  )
}

export default sidebar