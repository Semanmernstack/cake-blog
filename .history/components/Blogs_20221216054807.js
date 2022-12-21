
import React from 'react'

function Blogs({ id, title, slug, short, date, photo, authorName, authorAvatar }) {
  return (
    <div className="flex flex-col  justify-center shadow-lg text-center p-4  gap-2">
      <div>
        <p className="font-serif font-extrabold">{title}</p>
        <img className="h-[400px] w-[400px] lg:h-[700px] lg:w-[700px] rounded-md mx-auto object-contain" src={photo} alt="photo" />
        
        <p>{short}</p>
        
      </div>
      <div className="flex items-center mb-2  justify-around mt-2 ">
        <img className="h-14 w-14 rounded-full" src={authorAvatar} alt="" />
        <p className="font-serif font-extrabold">{authorName} <span className="ml-4 text-sm">{date}</span></p>

      </div>
      
    </div>
  )
}

export default Blogs