import React from 'react'


function Comment({ id, profile_image, author, content, created_at, handleDelete }) {


  return (
    <div>
        <div><img src={profile_image} />{author}<button onClick={() => handleDelete(id)}>X</button></div>
        <div>{content}<div>{created_at}</div></div>
    </div>
  )
}

export default Comment