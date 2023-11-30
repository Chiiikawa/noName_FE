import React from 'react'
import '../App.css'

// Post에 image가 존재할 시 image를 띄우고, 아니면 기본 이미지 출력
function Posting({ id, image, title }) {
  return (
    <div className='post'>
        {{image}
        ?<img src={`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}${image}`} alt='No Image'/>
        :<img src='../../public/apology.jpeg' />}
        <div>{title}</div>
    </div>
  )
}

export default Posting;