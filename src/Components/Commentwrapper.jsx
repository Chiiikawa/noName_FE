import React, { useState } from 'react'

function CommentWrapper(id, author, comments, is_bookmarked) {
    [commentcontent, setCommentContent] = useState('');

    const handleCommentContentChange = (e) => {
        setCommentContent(e.target.value);
    };

    // Comment 생성 request를 서버로 보낸 후, commentlist에 작성 내용을 push하여 댓글이 생성된 것처럼 보여주는 함수
    async function handleCommentCreateSubmit(e) {
        e.preventDefault(); // submit으로 인한 page reload를 방지하기 위해 preventDefault 사용
        try {
            // .env를 바탕으로 backend 상대경로를 지정
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/${id}/comments/`,
                {
                    post_id: id,
                    content: content,
                }, {
                headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") },
            } // 토큰 전달
            );
            if (response) {
                alert(`포스트 생성 성공!`)
                setGeneratedImageUrl('');
                navigate("../");  // Main page로 이동
            }
        } catch (error) {
            console.error("Authentication failed", error);  // response를 못받을 경우 콘솔에 에러 띄우기
        }
    }

    // bookmark 함수
    function handleBookMarkClick () {
        setIsBookMark(!isbookmark);
    }


    return (
        <div>
            {/* 백엔드로부터 받은 comments를 상속받아 Comment component로 띄우기 */}
            <div className="formbox">
                <button className={isbookmark?'PostDetail-bookmark':'PostDetail-bookmark'} 
                onClick={handleBookMarkClick}>
                북마크이미지
                </button>
                <input type="text" value={commentcontent} onChange={handleCommentContentChange} ref={commentInputRef} />
                <button onClick={handleCommentCreateSubmit}>댓글 입력</button>
            </div>
        </div>
    )
}

export default CommentWrapper