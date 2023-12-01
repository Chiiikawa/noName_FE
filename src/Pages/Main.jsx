import React, { useState, useRef, useEffect } from "react";
import TypingTitle from "../Typing.jsx";
import SignIn from "../Modals/SignIn.jsx";
import Loading from "../Components/Loading.jsx";
import "../Layout.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../store/store";
import Posting from "../Components/Posting.jsx";

// Loading 추가한 뒤에, 자꾸 신택스에러 뜸ㅠㅠㅠㅠㅠ
// Create 버튼 누르면 로딩창 띄우도록 설정해주세s

function Main() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [createbarinput, setCreatebarInput] = useState("");
  const [postlist, setPostList] = useState([]);
  const { setGeneratedImageUrl, setPrompt, setIsLogin } = useStore();
  // page 렌더링 시 createbar에 포커스가 되도록 useRef, useEffect를 사용
  const createbarInputRef = useRef();

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  // 클릭하면 렌더 일어남!
  const handleCreatebarInputChange = (e) => {
    setCreatebarInput(e.target.value);
  };

  // 서버에서 post를 조회하는 함수
  async function requestPostsImages() {
    try {
      setPostList([]); // postlist 초기화
      // .env를 바탕으로 backend 상대경로를 지정. Query string을 사용하여 최신순으로 정렬. query string 사용 시 post?_sort=id&_order=desc 넣기
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/posts/`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          },
        },
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
          prompt: createbarinput,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          }, // 토큰 전달
        },
      );
      if (response) {
        setPrompt(createbarinput);
        setGeneratedImageUrl(response.data.image);
        setLoading(false);
      }
      navigate("../result");
    } catch (error) {
      console.log("생성 실패");
      console.error("Error:", error);
      setLoading(false);
    }
  }

  // Loading 관련 함수
  const mainApi = async () => {
    setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기
    try {
      const response = await fetch(`api url`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const result = await response.json();
      console.log("mainData", result);
      setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    } catch (error) {
      window.alert(error);
    }
  };

  // re-render가 될 시에도 실행되는 경우를 방지하기 위해 빈 배열을 넣음
  useEffect(() => {
    createbarInputRef.current.focus();
    requestPostsImages();
  }, []);

  const moveToCreate = () => {
    navigate("../mainguest");
  };

  return (
    <div className="Main">
      <button onClick={showModal}>모달 띄우기</button>
      {modalOpen && <SignIn setModalOpen={setModalOpen} />}
      <div className="header">
        <input
          type="text"
          className="Dalle_createbar"
          value={createbarinput}
          onChange={handleCreatebarInputChange}
          ref={createbarInputRef}
          placeholder="만들고 싶은 이미지를 적어주세요!"
        />
        {/* 요거 위에 있는 만들기 버튼으로 대체 */}
        <a className="btnCreate" onClick={createPostImage}>
          <span>Create</span>
          <div class="transition"></div>
        </a>
      </div>
      {loading ? <Loading /> : null}
      {postlist.map((posts) => (
        <Posting
          key={posts.id}
          id={posts.id}
          image={posts.generated_image}
          title={posts.title}
          content={posts.content}
        />
      ))}
      <TypingTitle />
    </div>
  );
}

export default Main;
