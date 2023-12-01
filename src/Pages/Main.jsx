import React, { useState, useRef, useEffect } from "react";
import Loading from "../Components/Loading.jsx";
import "../Layout.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import useStore from '../store/store';  // zustand 사용해서 setGeneratedImageUrl 사용
import PostDetail from "../Modals/PostDetail.jsx";
import Posting from "../Components/Posting.jsx";

// Loading 추가한 뒤에, 자꾸 신택스에러 뜸ㅠㅠㅠㅠㅠ
// Create 버튼 누르면 로딩창 띄우도록 설정해주세요

function Main() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);
    const [createbarinput, setCreatebarInput] = useState('');
    const [postlist, setPostList] = useState([]);
    const { setGeneratedImageUrl, setPrompt, setIsLogin } = useStore();
  // page 렌더링 시 createbar에 포커스가 되도록 useRef, useEffect를 사용
    const createbarInputRef = useRef();

    // 모달창 노출
    const showModal = () => {
      setModalOpen(true);
    };

    const handleCreatebarInputChange = (e) => {
      setCreatebarInput(e.target.value);
    };
  
  // 서버에서 post를 조회하는 함수
  async function requestPostsImages() {
    try {
      setPostList([]);  // postlist 초기화
      // .env를 바탕으로 backend 상대경로를 지정. Query string을 사용하여 최신순으로 정렬. query string 사용 시 post?_sort=id&_order=desc 넣기
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") },
      }
      );
      if (response) {
        console.log("post를 모두 불러오는 중...");
        console.log("Data를 불러옵니다.:", response.data);
        setPostList(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // DALL-E에 사용할 prompt를 서버에 전달해 이미지를 만드는 함수
  async function createPostImage() {
    try {
      setLoading(true); // 호출 전 loding을 true로 변경
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/dalle/`,
        {
          "prompt": createbarinput
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN") }, // 토큰 전달
        }
      );
      if (response) {
        setPrompt(createbarinput)
        setGeneratedImageUrl(response.data.image)
        setLoading(false);
      }
      navigate('../result')
    } catch (error) {
      console.log("생성 실패")
      console.error("Error:", error);
      setLoading(false);
    }
  }

  // re-render가 될 시에도 실행되는 경우를 방지하기 위해 빈 배열을 넣음
  useEffect(() => {
    createbarInputRef.current.focus();
    requestPostsImages();
  }, [])


  return (
    <div className="Main">
    <button onClick={showModal}>모달 띄우기</button>
    {modalOpen && <PostDetail setModalOpen={setModalOpen} />}

    <input type="text" 
    className="Dalle_createbar" 
    value={createbarinput}
    onChange={handleCreatebarInputChange}
    ref={createbarInputRef}
    placeholder='만들고 싶은 이미지를 적어주세요!' 
    />
    <button className='Dalle_createbutton' onClick={createPostImage}>만들기</button>
      {loading 
      ? <Loading /> 
      : null}
      {postlist.map((posts) => (
      <Posting key={posts.id} 
      id={posts.id} 
      image={posts.generated_image} 
      title={posts.title} 
      content={posts.content} 
      />
    ))}

  </div>
  );
}

export default Main;
