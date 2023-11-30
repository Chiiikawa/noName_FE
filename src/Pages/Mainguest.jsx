import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Posting from '../Components/Posting';
import useStore from '../store/store';  // zustand 사용해서 setGeneratedImageUrl 사용
import PostDetail from "../Modals/PostDetail"

function Mainguest() {

      // 모달창 노출 여부 state
      const [modalOpen, setModalOpen] = useState(false);

      // 모달창 노출
      const showModal = () => {
          setModalOpen(true);
      };

  const navigate = useNavigate();  // 다른 페이지로 이동할 수 있도록 navigate 선언
  const [createbarinput, setCreatebarInput] = useState('');
  const [postlist, setPostList] = useState([]);
  const { setGeneratedImageUrl, setPrompt, setIsLogin } = useStore();

  const handleCreatebarInputChange = (e) => {
    setCreatebarInput(e.target.value);
  };
  // page 렌더링 시 createbar에 포커스가 되도록 useRef, useEffect를 사용
  const createbarInputRef = useRef();


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
      console.log("response.data:", response.data)
      if (response) {
        console.log("post를 모두 불러오는 중...");
        setPostList(response.data);
      }
    } catch (error) {
      console.error("Authentication failed", error);
      // 아래 부분은 테스트를 위해서 넣어둔 것이니, 제대로 작성 시 수정 필요
      let defaultpostlist = [{
        id: 0,
        image: "이미지없음",
        content: "요청하신 post가 없습니다."
      },]
      setPostList(defaultpostlist);
    }
  }

  // DALL-E에 사용할 prompt를 서버에 전달하는 함수
  async function createPostImage() {
    try {
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
      }
      navigate('../result')
    } catch (error) {
      console.log("생성 실패")
      console.error("Authentication failed", error);
    }
  }

  // re-render가 될 시에도 실행되는 경우를 방지하기 위해 빈 배열을 넣음
  useEffect(() => {
    createbarInputRef.current.focus();
    // requestPostsImages();
  }, [])

  return (
    <div>

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
      {postlist.map((posts) => (
        <Posting key={posts.id} 
        id={posts.id} 
        image={posts.image} 
        title={posts.title} 
        content={posts.content} 
        />
      ))}
    </div>
    
  );
}

export default Mainguest;
