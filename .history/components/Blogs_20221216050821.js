
import React from 'react'

function Blogs({ id, title, slug, short, date, photo, authorName, authorAvatar }) {
  return (
    <div>
      <div>
        <p>{title}</p>
        <img src={photo} alt="photo" />
        
        <p>{short}</p>
        
      </div>
      <div>
        <img src={authorAvatar} alt="" />
        <p>{authorName}</p>

      </div>
      <div>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Blogs