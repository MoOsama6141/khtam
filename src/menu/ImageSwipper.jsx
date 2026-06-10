import React from 'react'

function ImageSwipper({mainImage}) {
  return (
    <div className='w-full h-auto flex justify-center items-center  '>
      <img src={mainImage} alt="mainImage"  className='w-auto h-[100vh]'/>
    </div>
  )
}

export default ImageSwipper
 