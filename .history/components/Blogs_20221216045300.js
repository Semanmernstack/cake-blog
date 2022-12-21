import React from 'react'

function Blogs({ id, title, slug, short, date, photo, authorName,authorAvatar }) {
  return (
    <div>
      <img src={photo} alt="" />
    </div>
  )
}

export default Blogs