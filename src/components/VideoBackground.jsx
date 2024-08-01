import React from 'react'

const VideoBackground = () => {
  return (
    <div className='py-8  opacity-100 '>
        <iframe className='w-screen aspect-video'  src="https://www.youtube.com/embed/lB95KLmpLR4?si=uukZDQiWZGhB87Ee&mute=1&autoplay=1&start=50&controls=0&showinfo=0&loop=1"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}


export default VideoBackground
