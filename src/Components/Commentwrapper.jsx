import React, { useState } from 'react'
import axios from 'axios';
import Comment from './Comment';

function CommentWrapper(post_id, author, comments, is_bookmarked) {
    const [commentslist, setCommentsList] = useState(comments)
    const [commentcontent, setCommentContent] = useState('');
    const [isbookmark, setIsBookMark] = useState(is_bookmarked);

    const handleCommentContentChange = (e) => {
        setCommentContent(e.target.value);
    };

    // Comment 생성 request를 서버로 보낸 후, commentlist에 작성 내용을 push하여 댓글이 생성된 것처럼 보여주는 함수
    async function handleCommentCreateSubmit(e) {
        e.preventDefault(); // submit으로 인한 page reload를 방지하기 위해 preventDefault 사용
        try {
            let newcomment = {
                post: post_id,
                user: author,
                content: commentcontent,
            };
            // .env를 바탕으로 backend 상대경로를 지정
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/${post_id}/comments/`,
                newcomment
                , { headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }, } // 토큰 전달
            );
            if (response) {
                setCommentsList([...commentslist, newcomment]); // 새로 쓴 댓글 newcomment를 commentslist에 추가
                // 생성된 댓글을 추가해주는 로직 필요
            }
        } catch (error) {
            console.error(error);  // response를 못받을 경우 콘솔에 에러 띄우기
        }
    }

    async function handleCommentDelete(id) {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/${post_id}/comments/`, 
                {id},   // 삭제할 댓글의 id 전달
                { headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }, } // 토큰 전달
            );
            if (response) {
                setCommentsList(commentslist.filter((comment) => comment.id !== id));
                console.log("댓글이 삭제되었습니다.")
            }
        } catch (error) {
            console.error(error);  // response를 못받을 경우 콘솔에 에러 띄우기
        }
    }


    // bookmark 함수
    function handleBookMarkClick() {
        setIsBookMark(!isbookmark);
    }


    return (
        <div>
            <div className='Comment-container'>
                {postlist.map((comment) => (
                    <Comment key={comment.id}
                        id={comment.id}
                        post_id={comment.post}
                        author={comment.user.nickname}
                        profile_image={comment.user.profile_image}
                        content={comment.content}
                        created_at={comment.created_at}
                        handleDelete={handleCommentDelete}
                    />
                ))}
            </div>
            <div className="formbox">
                <button className={isbookmark ? 'PostDetail-bookmark' : 'PostDetail-nobookmark'}
                    onClick={handleBookMarkClick}>
                    북마크이미지
                </button>
                <input type="text" value={commentcontent} onChange={handleCommentContentChange} />
                <button onClick={handleCommentCreateSubmit}>댓글 입력</button>
            </div>
        </div>
    )
}

export default CommentWrapper