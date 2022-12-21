
import React from 'react'

function Blogs({ id, title, slug, short, date, photo, authorName, authorAvatar }) {
  return (
    <div className="flex flex-col  justify-center shadow-lg text-center h-screen  gap-4">
      <div>
        <p>{title}</p>
        <img className="h-[600px] w-[600px] rounded-md mx-auto object-contain" src={photo} alt="photo" />
        
        <p>{short}</p>
        
      </div>
      <div className="flex items-center mb-4  justify-around mt-4 ">
        <img className="h-14 w-14 rounded-full" src={authorAvatar} alt="" />
        <p className="font-serif font-extrabold">{authorName} <span className="ml-4 text-sm">{date}</span></p>

      </div>
      
    </div>
  )
}

export default Blogs