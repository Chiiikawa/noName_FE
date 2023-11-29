import React from 'react'

// Post에 image가 존재할 시 image를 띄우고, 아니면 기본 이미지 출력
function Posting({ id, image, title }) {
  return (
    <div>
        {{image}?<img src={image} alt='No Image'/>:<img src='../../public/apology.jpeg' />}
    </div>
  )
}

export default Posting;