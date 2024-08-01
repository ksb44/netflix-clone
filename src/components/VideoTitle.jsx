import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%]  md:pl-[10%] px-12  absolute md:bg-gradient-to-r md:from-black  text-white mt-[50%] md:mt-[0%]
    bg-black md:bg-transparent'>
      <h1 className='font-bold  pl-5 md:pl-0 text-sm md:text-2xl'>{title.length >=40 ? title.substr(40):title}</h1>
      <p className='hidden md:block md:py-6 text-sm md:text-lg md:w-1/3 '>{overview}</p>
      <div className='space-x-2 hidden md:block '>
        <button className='text-black bg-gray-400 md:h-10  md:px-6 p-1 rounded-md'>▶️ Play</button>
        <button className='text-white bg-gray-400 md:h-10 md:px-6 p-1 rounded-md'> ! More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
