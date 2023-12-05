import React, { useState, useEffect } from "react";
import "./Postdetails.css";
import axios from "axios";
import CommentWrapper from "../Components/Commentwrapper";

function PostDetail({ post_id, setModalPostDetailOpen }) {
  const [resdata, setResData] = useState();
  const [detailpageimageurl, setDetailPageImageUrl] = useState("");
  const [commentslist, setCommentsList] = useState([]);

  // 모달 끄기
  const closePostDetailModal = () => {
    setModalPostDetailOpen(false);
  };

  // 서버에서 해당 post의 detail page에 관한 정보를 받아오는 함수. 상속받은 post_id를 사용하여 접근
  async function requestPostDetail() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/posts/${post_id}/`,
      );
      if (response) {
        console.log(`POST_ID:${post_id} 인 post의 상세 정보를 불러오는 중... `);
        let val = response.data;
        console.log("response.data:", val);
        setResData(val);
        setDetailPageImageUrl(response.data.generated_image);
        // setAuthor(response.data.author);
        // setTitle(response.data.title);
        // setIsLike(response.data.is_liked);
        // setIsBookMark(response.data.is_bookmarked);
        // setTotalLike(response.data.likes_count);
        // setTotalComment(response.data.comments_count);
        setCommentsList(response.data.comments);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    requestPostDetail();
  }, []);

  return (
    <div>
      <div className="modalbox">
        <div className="modal">
          <button className="close" onClick={closePostDetailModal}>
            X
          </button>
          <div className="username">@username</div>
          <div className="img-container">
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${detailpageimageurl}`}
              className="post-img"
              alt="상세 이미지를 불러올 수 없습니다."
            />
          </div>
          <div>
            {commentslist && (
              <CommentWrapper
                post_id={post_id}
                resdata={resdata}
                commentslist={commentslist}
                setCommentsList={setCommentsList}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
