import React, { useEffect } from 'react'

function PostDetail({ id, image, title, content, author, likes_count, comments_count, is_liked, is_bookmarked }) {

    const [islike, setIsLike] = useState(false);
    const [totallike, setTotalLike] = useState(0);
    const [totalcomment, setTotalComment] = useState(0);
    const [bookmark, setBookMark] = useState(false);
    const [commentlist, setCommentList] = useState([]);

    // 유저의 likes 여부와 total_like 조회
    async function getPostDetail() {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/`, {
            headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }
        })
        if (response) {
            setTotalLike(response.data.likes_count)
            setTotalComment(response.data.comments_count)
            if (response.data.is_liked === true) {
                setIsLike(true)
            }
        }
    }

    // page 첫 render 시에만 Post detail을 가져오도록 설정. re-render가 될 시 실행되는 경우 방지를 위해 빈 배열을 넣음
    useEffect(() => {
        getPostDetail();
      }, [])

    function handleLikeClick () {
        if (islike) setTotalLike(totallike-1);
        else setTotalLike(totallike+1);
        setIsLike(!islike);
    }


    // img tag는 relative, img 안의 likes button은 absolute로 지정. 가리면 z-index 설정바람.
    // like button에 삼항연산자를 사용하여 islike 상태에 따라 다르게 보이게 함.
    return (
        <div>
            <img
                src={image}
                alt="Sorry..."
                className='PostDetail-img'
            ><button className={islike?'PostDetail-like':'PostDetail-nolike'} onClick={handleLikeClick}>{totallike}</button>
            </img>
        </div>
    )
}

export default PostDetail