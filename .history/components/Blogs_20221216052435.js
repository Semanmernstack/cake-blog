
import React from 'react'

function Blogs({ id, title, slug, short, date, photo, authorName, authorAvatar }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div>
        <p>{title}</p>
        <img className="h-[600px] w-[600px] rounded-md mx-auto" src={photo} alt="photo" />
        
        <p>{short}</p>
        
      </div>
      <div>
        <img className="h-14 w-14 rounded-full" src={authorAvatar} alt="" />
        <p>{authorName}</p>

      </div>
      <div>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Blogs