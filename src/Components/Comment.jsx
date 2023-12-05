import React from "react";

function Comment({
  id,
  profile_image,
  user_id,
  author,
  content,
  created_at,
  handleDelete,
}) {
  return (
    <div>
      <div>
        <img
          src={`${process.env.REACT_APP_BACKEND_URL}${profile_image}`}
          alt="프로필 이미지"
        />{" "}
        작성자: {author}
        {localStorage.get("USER_ID") === user_id ? (
          <button onClick={() => handleDelete(id)}>X</button>
        ) : null}
      </div>
      <div>
        {content}
        작성시간: {created_at}
      </div>
    </div>
  );
}

export default Comment;
