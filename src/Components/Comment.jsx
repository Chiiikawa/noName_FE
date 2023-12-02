import React from 'react'

function Comments({ id, profile_image, author, content, created_at }) {

    // 댓글을 삭제하는 함수
    async function handleCommentDelete() {
        try {
          const response = await axios.delete(
            `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/${post_id}/${comment_id}`,
            {
              headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }, // 토큰 전달
            }
          );
          if (response) {
            setPrompt(createbarinput)
            setGeneratedImageUrl(response.data.image)
          }
          navigate('../result')
        } catch (error) {
          console.log("생성 실패")
          console.error("Authentication failed", error);
        }
      }

  return (
    <div>
        <div><img src={profile_image} />{author}<button onClick={handleCommentDelete}>X</button></div>
        <div>{content}<div>{created_at}</div></div>
    </div>
  )
}

export default Comments