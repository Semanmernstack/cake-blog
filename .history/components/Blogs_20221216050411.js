import Link from 'next/link'
import React from 'react'

function Blogs({ id, title, slug, short, date, photo, authorName,authorAvatar }) {
  return (
    <div>
      <div>
        <p>{title}</p>
        <img src={photo} alt="photo" />
        <Link>
        <p>{short}</p>
        </Link>
      </div>
      <div>
        <img src={authorAvatar} alt="" />
      </div>
    </div>
  )
}

export default Blogs