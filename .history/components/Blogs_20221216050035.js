import React from 'react'

function Blogs({ id, title, slug, short, date, photo, authorName,authorAvatar }) {
  return (
    <div>
      <div>
        <p>{title}</p>
        <img src={photo} alt="" />
      </div>
    </div>
  )
}

export default Blogs