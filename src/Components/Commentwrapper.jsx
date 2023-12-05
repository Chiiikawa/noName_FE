import React, { useState } from "react";
import axios from "axios";
import Comment from "./Comment";

function CommentWrapper(post_id, resdata, commentslist, setCommentsList) {
  const [commentcontent, setCommentContent] = useState("");
  const [islike, setIsLike] = useState(resdata.is_liked);
  const [totallike, setTotalLike] = useState(resdata.likes_count);
  const [isbookmark, setIsBookMark] = useState(resdata.is_bookmarked);

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  // Comment 생성 request를 서버로 보낸 후, commentlist에 작성 내용을 push하여 댓글이 생성된 것처럼 보여주는 함수
  async function handleCommentCreateSubmit(e) {
    e.preventDefault(); // submit으로 인한 page reload를 방지하기 위해 preventDefault 사용
    try {
      let newcomment = {
        post: post_id,
        user: localStorage.get("UserName"),
        content: commentcontent,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/${post_id}/comments/`,
        newcomment,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          },
        }, // 토큰 전달
      );
      if (response) {
        setCommentsList([...commentslist, newcomment]); // 새로 쓴 댓글 newcomment를 commentslist에 추가
        // 생성된 댓글을 추가해주는 로직 필요
      }
    } catch (error) {
      console.log(error); // response를 못받을 경우 콘솔에 에러 띄우기
    }
  }

  // 댓글 삭제 함수. 삭제 후 해당 댓글을 commentlist
  async function handleCommentDelete(id) {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/posts/${post_id}/comments/`,
        { id }, // 삭제할 댓글의 id 전달
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          },
        }, // 토큰 전달
      );
      if (response) {
        setCommentsList(commentslist.filter((comment) => comment.id !== id));
        console.log("댓글이 삭제되었습니다.");
      }
    } catch (error) {
      console.error(error); // response를 못받을 경우 콘솔에 에러 띄우기
    }
  }

  // bookmark 함수
  function handleBookMarkClick() {
    setIsBookMark(!isbookmark);
  }

  return (
    <div>
      <div className="Comment-container">
        {commentslist &&
          commentslist.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              post_id={comment.post}
              user_id={comment.user}
              profile_image={comment.user_profile_image}
              author={comment.user_nickname}
              content={comment.content}
              created_at={comment.created_at}
              handleDelete={handleCommentDelete}
            />
          ))}
      </div>
      <div className="formbox">
        <button
          className={
            isbookmark ? "PostDetail-bookmark" : "PostDetail-nobookmark"
          }
          onClick={handleBookMarkClick}
        >
          북마크이미지
        </button>
        <input
          type="text"
          value={commentcontent}
          onChange={handleCommentContentChange}
        />
        <button onClick={handleCommentCreateSubmit}>댓글 입력</button>
      </div>
    </div>
  );
}

export default CommentWrapper;
