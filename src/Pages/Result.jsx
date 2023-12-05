import React, { useState, useRef, useEffect } from "react";
import "../Layout/Layout.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import useStore from "../store/store"; // zustand store 사용

/* 레이아웃 깨짐; 시간 없으니 이대로 일단 ㄱㄱ 건드리지마셈 */

function Result() {
  const { generatedimageurl, setGeneratedImageUrl, prompt, setPrompt } =
    useStore(); // 상태관리 store.js 사용

  // post의 content state 지정
  const [temporaryprompt, setTemporaryPrompt] = useState(prompt);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate(); // use

  // login page focus를 위해 useRef 사용
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  // enter키 입력 시 focus가 title에서 content input으로 이동하도록 설정
  const changeInputFocus = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // enter를 입력하여 focus 이동 시 리랜더링으로 인한 title값 초기화 방지
      contentInputRef.current.focus();
    }
  };

  // input 입력 시 텍스트가 뜨도록 기본 설정
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePromptChange = (e) => {
    setTemporaryPrompt(e.target.value);
  };

  // Post 생성 request를 서버로 보내는 함수
  async function handlePostCreateSubmit(e) {
    e.preventDefault(); // submit으로 인한 page reload를 방지하기 위해 preventDefault 사용
    try {
      // .env를 바탕으로 backend 상대경로를 지정
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/`,
        {
          image_url: generatedimageurl,
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          },
        }, // 토큰 전달
      );
      if (response) {
        alert(`포스트 생성 성공!`);
        setGeneratedImageUrl("");
        navigate("../"); // Main page로 이동
      }
    } catch (error) {
      console.error("Authentication failed", error); // response를 못받을 경우 콘솔에 에러 띄우기
    }
  }

  // page 첫 render 시 title input에 focus되도록 설정. re-render가 될 시 실행되는 경우 방지를 위해 빈 배열을 넣음
  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  // DALL-E에 사용할 prompt를 서버에 전달하는 함수
  async function createPostImage() {
    try {
      console.log("입력하신 prompt는", temporaryprompt, "입니다.");
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/dalle/`,
        {
          prompt: temporaryprompt,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          }, // 토큰 전달
        },
      );
      if (response) {
        console.log("이미지 생성 중...");
        console.log("response.data:", response.data);
        setPrompt(temporaryprompt);
        setGeneratedImageUrl(response.data.image);
      }
    } catch (error) {
      console.log("생성 실패");
      console.error("Authentication failed", error);
    }
  }

  // 생성된 image를 바로 다운로드하는 함수. js-file-download의 fileDownload 사용 -> 안됨
  // const handleDownload = (url, filename) => {
  //   axios.get(url, {
  //     responseType: 'blob',
  //   })
  //   .then((res) => {
  //     fileDownload(res.data, filename)
  //   })
  // }

  return (
    <div className="Result">
      <img
        class="Result-img"
        src={generatedimageurl}
        alt="Sorry... I can't get the image..."
      />

      <div>
        <input
          type="text"
          class="Result-prompt"
          value={temporaryprompt}
          onChange={handlePromptChange}
        />
        <input
          type="text"
          class="Result-title"
          placeholder="Enter post title"
          value={title}
          onChange={handleTitleChange}
          ref={titleInputRef}
          onKeyDown={changeInputFocus}
        />
        <input
          type="text"
          class="Result-content"
          placeholder="Enter post content"
          value={content}
          onChange={handleContentChange}
          ref={contentInputRef}
        />
        <div class="Result-button">
          <div class="Result-btn-group">
            <button>SAVE</button>
            <button onClick={handlePostCreateSubmit}>POST</button>
            <button onClick={createPostImage}>REGENERATE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
