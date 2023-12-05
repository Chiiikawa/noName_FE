import React from "react";
import "../Layout/Layout.css";

// Post에 image가 존재할 시 image를 띄우고, 아니면 기본 이미지 출력
function Posting({ id, imageurl, handlePostClick }) {
  return (
    <>
      <img
        className="post"
        src={`${process.env.REACT_APP_BACKEND_URL}${imageurl}`}
        alt={`이미지를 가져오기 위해 접근한 url은 ${process.env.REACT_APP_BACKEND_URL}${imageurl}입니다.`}
      />
    </>
  );
}

export default Posting;
