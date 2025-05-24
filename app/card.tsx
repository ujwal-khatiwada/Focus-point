import React from 'react'

type CardProps={
    imgURL: string;
    fullName: string;
    address: string;
}
const card = ({fullName,address, imgURL}: CardProps) => {
  return (
    <div>
        <div className='flex flex-col items-center rounded bg-gray-300 h-50 w-45 m-5 p-3'>
            <img className='h-35 w-35 rounded' src={imgURL} alt="ProfilePic" />
            <div className='mt-2'>
                <h1 className='font-bold text-sm underline'>{fullName}</h1>
                <p className='text-xs'>{address}</p>
            </div>
        </div>
    </div>
  )
}

export default card